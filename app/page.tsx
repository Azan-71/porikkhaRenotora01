import dbConnect from "../lib/dbConnect";

export default async function Home() {
    await dbConnect();
    return <h1 className="text-green-600">MongoDB Connected!</h1>;
}
