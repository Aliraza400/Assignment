import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function runAggregation() {
  try {
    await client.connect();
    const db = client.db("Task");
    const sales = db.collection("sales");

    const pipeline = [
      { $unwind: "$items" },
      {
        $addFields: {
          revenue: { $multiply: ["$items.quantity", "$items.price"] },
        },
      },
      {
        $group: {
          _id: {
            store: "$store",
            month: { $dateToString: { format: "%Y-%m", date: "$date" } },
          },
          totalRevenue: { $sum: "$revenue" },
          averagePrice: { $avg: "$items.price" },
        },
      },
      {
        $project: {
          _id: 0,
          store: "$_id.store",
          month: "$_id.month",
          totalRevenue: 1,
          averagePrice: 1
        }
      },
      {
        $sort: {
            store: 1,
            month: 1
        }
      }
    ];

    const result = await sales.aggregate(pipeline).toArray()
    console.log("Aggregation Result:\n", JSON.stringify(result, null, 2));
  } catch (err) {
    console.log("Error", err);
  } finally {
    await client.close();
  }
}

runAggregation()
