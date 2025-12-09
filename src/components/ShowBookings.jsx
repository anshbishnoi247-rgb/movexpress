import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { LoadingIcon } from "../common/Icons";
import { db } from "../fireBaseConfig";

const ShowBookings = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  const [edits, setEdits] = useState({});
  const [clickUpdate, setClickUpdate] = useState(false);

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
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "bookings", id));
      alert("Data deleted");
      fetchData();
    } catch (err) {
      alert("Delete failed");
      console.error(err);
    }
  };

  const handleUpdate = async (id) => {
    if (!edits[id]) {
      alert("No changes made");
      return;
    }

    try {
      const docRef = doc(db, "bookings", id);
      
      await updateDoc(docRef, edits[id]);

      alert("Data updated");

      setEdits((prev) => ({ ...prev, [id]: {} }));

      fetchData();

    } catch (err) {
      alert("Update failed");
      console.error(err);
    }
  };

  return (
    <section className="bg-gray-700 p-5 h-screen relative overflow-x-scroll">
      {loading ? (
        <LoadingIcon className="top-1/2 left-1/2 absolute -translate-1/2 w-50 h-50" />
      ) : data.length === 0 ? (
        <p>No data found</p>
      ) : (
        <table className="w-full text-left max-w-360 mx-auto border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white text-sm">
              <th className="py-3 px-4">Pickup address</th>
              <th className="py-3 px-4">Destination address</th>
              <th className="py-3 px-4">Van selected</th>
              <th className="py-3 px-4">Loading time</th>
              <th className="py-3 px-4">Start time</th>
              <th className="py-3 px-4">Start date</th>
              <th className="text-center">Actions</th>
              <th className="flex justify-end items-center py-3 px-4">
                <Link to="/">
                  <X
                    className="hover:text-red-500 transition-all duration-300"
                    size={20}
                  />
                </Link>
              </th>
            </tr>
          </thead>

          <tbody className="bg-gray-100 font-inter">
            {data.map((obj) => (
              <tr
                key={obj.id}
                className="border-b hover:bg-gray-200 transition"
              >
                {/* PICKUP */}
                <td className="py-3 px-4">
                  <input
                    type="text"
                    disabled={!clickUpdate}
                    value={
                      edits[obj.id]?.pickupaddress ?? obj.pickupaddress ?? ""
                    }
                    onChange={(e) =>
                      setEdits({
                        ...edits,
                        [obj.id]: {
                          ...edits[obj.id],
                          pickupaddress: e.target.value,
                        },
                      })
                    }
                    className="min-w-30 w-full max-w-[150px]"
                  />
                </td>

                {/* DESTINATION */}
                <td className="py-3 px-4">
                  <input
                    type="text"
                    disabled={!clickUpdate}
                    value={
                      edits[obj.id]?.destinationaddress ??
                      obj.destinationaddress ??
                      ""
                    }
                    onChange={(e) =>
                      setEdits({
                        ...edits,
                        [obj.id]: {
                          ...edits[obj.id],
                          destinationaddress: e.target.value,
                        },
                      })
                    }
                    className="min-w-30 w-full max-w-[150px]"
                  />
                </td>

                {/* VAN */}
                <td className="py-3 px-4">
                  <input
                    type="text"
                    disabled={!clickUpdate}
                    value={edits[obj.id]?.vanchoosed ?? obj.vanchoosed ?? ""}
                    onChange={(e) =>
                      setEdits({
                        ...edits,
                        [obj.id]: {
                          ...edits[obj.id],
                          vanchoosed: e.target.value,
                        },
                      })
                    }
                    className="min-w-30 w-full max-w-[150px]"
                  />
                </td>

                {/* LOADING TIME */}
                <td className="py-3 px-4">
                  <input
                    type="text"
                    disabled={!clickUpdate}
                    value={
                      edits[obj.id]?.loadingunloadingTime ??
                      obj.loadingunloadingTime ??
                      ""
                    }
                    onChange={(e) =>
                      setEdits({
                        ...edits,
                        [obj.id]: {
                          ...edits[obj.id],
                          loadingunloadingTime: e.target.value,
                        },
                      })
                    }
                    className="min-w-30 w-full max-w-[150px]"
                  />
                </td>

                {/* START TIME */}
                <td className="py-3 px-4">
                  <input
                    type="text"
                    disabled={!clickUpdate}
                    value={edits[obj.id]?.time ?? obj.time ?? ""}
                    onChange={(e) =>
                      setEdits({
                        ...edits,
                        [obj.id]: {
                          ...edits[obj.id],
                          time: e.target.value,
                        },
                      })
                    }
                    className="min-w-30 w-full max-w-[150px]"
                  />
                </td>

                {/* DATE */}
                <td className="py-3 px-4">
                  <input
                    type="date"
                    disabled={!clickUpdate}
                    value={edits[obj.id]?.date ?? obj.date ?? ""}
                    onChange={(e) =>
                      setEdits({
                        ...edits,
                        [obj.id]: {
                          ...edits[obj.id],
                          date: e.target.value,
                        },
                      })
                    }
                    className="min-w-30 w-full max-w-[150px]"
                  />
                </td>

                {/* ACTION BUTTONS */}
                <td className="py-3 px-4 flex justify-center gap-2">
                  {/* UPDATE */}
                  <button
                    onClick={() => {
                      if (!clickUpdate) {
                        alert("Now you can edit fields.");
                        setClickUpdate(true);
                      } else {
                        handleUpdate(obj.id);
                      }
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-sm rounded-md"
                  >
                    Update
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={() => handleDelete(obj.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-sm rounded-md"
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
