import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { LoadingIcon } from "../common/Icons";
import { db } from "../fireBaseConfig";


const ShowBookings = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  

  const fetchData = async () => {
    setLoading(true);
    try {
      const collectionRef = collection(db, "bookings");
      const bookings = await getDocs(collectionRef);
      const bookingsArr = bookings.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(bookingsArr);
      console.log(bookingsArr);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    const userRef = doc(db, "bookings", id);
    try {
      await deleteDoc(userRef);
      alert("data deleted");
       fetchData();
    } catch (err) {
      alert("Something Went Wrong");
    }
  };

  return (
    <section className="bg-gray-700 p-5 h-screen relative">
      {loading ? (
        <LoadingIcon className="top-1/2 left-1/2 absolute -translate-1/2 w-50 h-50" />
      ) : !data ? (
        <p>No data found</p>
      ) : (
        <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white text-sm">
              <th className="py-3 px-4 font-inter ">Pickup address</th>
              <th className="py-3 px-4">Destination address</th>
              <th className="py-3 px-4">Van selected</th>
              <th className="py-3 px-4">Loading time</th>
              <th className="py-3 px-4">Start time</th>
              <th className="py-3 px-4">Start date</th>
              <th className=" text-center">Actions</th>
              <th className="col-span-2-2 flex justify-end items-center py-3 px-4">
                <X size={18} />
              </th>
            </tr>
          </thead>

          <tbody className="bg-gray-100">
            {data.map((obj, index) => (
              <tr key={index} className="border-b hover:bg-gray-200 transition">
                <td className="py-3 px-4">{obj.pickupaddress ?? "---"}</td>
                <td className="py-3 px-4">{obj.destinationaddress ?? "---"}</td>
                <td className="py-3 px-4">{obj.vanchoosed ?? "---"}</td>
                <td className="py-3 px-4">
                  {obj.loadingunloadingTime ?? "---"}
                </td>
                <td className="py-3 px-4">{obj.time ?? "---"}</td>
                <td className="py-3 px-4">{obj.date ?? "---"}</td>
                <td className="py-3 px-4 flex  justify-center gap-2 col-span-2 ">
                  <button
                    onClick={() => alert("click on value to update")}
                    className="bg-green-600 hover:bg-green-700 cursor-pointer text-white px-3 py-1 text-sm rounded-md"
                  >
                    Update
                  </button>

                  <button
                    onClick={() => handleDelete(obj.id)}
                    className="bg-red-600 hover:bg-red-700 cursor-pointer text-white px-3 py-1 text-sm rounded-md"
                  >
                    Delete
                  </button>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default ShowBookings;
