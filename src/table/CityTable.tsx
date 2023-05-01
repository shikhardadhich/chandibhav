import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import Modal from "./Modal";
import Link from "next/link";

interface RowData {
  id: number;
  city: string;
  rates: number;
  created_at: Date;
  is_active: boolean;
}

export default function MyTable({ silver_rates, isUserLoggedIn }: any) {
  const [data, setData] = useState<RowData[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newRates, setNewRates] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [selectedRow, setSelectedRow] = useState<RowData>();

  useEffect(() => {
    function fetchData() {
      if (isUserLoggedIn) {
        setData(silver_rates);
      } else {
        const result = silver_rates.filter((obj: any) => {
          return obj.is_active === true;
        });

        setData(result);
      }
    }
    fetchData();
  }, []);
  async function handleSave() {
    let rowData: RowData;
    rowData = selectedRow!;

    const { id, ...updatedFields } = rowData; // Destructure the row data and exclude the id field

    const { error } = await supabase
      .from("citylist")
      .update({
        ...updatedFields,
        rates: newRates,
        is_active: isActive,
        created_at: new Date(),
      })
      .eq("id", id);

    if (error) {
      console.error(error);
    } else {
      const updatedData = [...data];
      const index = data.findIndex((d) => d.id === rowData.id);
      updatedData[index] = { ...rowData, rates: newRates, is_active: isActive };
      setData(updatedData);
    }
  }
  function handleRowClick(rowData: RowData) {
    setSelectedRow(rowData);
    setShowModal(true);
  }

  const handleCheckboxChange = () => {
    setIsActive(!isActive);
  };
  function handleCancel() {
    setShowModal(false);
  }
  function renderTableRows() {
    return data.map((row) => (
      <tr
        key={row.id}
        onClick={() => {
          isUserLoggedIn ? handleRowClick(row) : "";
        }}
        className="hover:bg-gray-100 cursor-pointer"
      >
        <td className="py-2 pl-5">
          <Link
            href={{
              pathname: "/" + row.city,
            }}
          >
            {row.city}
          </Link>
        </td>
        <td className="py-2 text-left">₹ {row.rates}</td>
        <td className="py-2  text-center">
          {new Date(row.created_at).toLocaleDateString()} -{" "}
          {new Date(row.created_at).toLocaleTimeString()}
        </td>
        {isUserLoggedIn ? (
          <td className="py-2">
            <input
              type="checkbox"
              id="isActive"
              checked={row.is_active}
              className="h-4 w-4 text-blue-600"
            />
          </td>
        ) : (
          ""
        )}
      </tr>
    ));
  }

  return (
    <>
      {" "}
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">City</th>
            <th className=" text-left">Rates (KG)</th>
            <th className="text-center">Last Updated</th>
            {isUserLoggedIn ? <th className=" text-left">Is Active</th> : null}
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      <Modal
        title={"Update Rates for - " + selectedRow?.city}
        visible={showModal}
        onClose={() => setShowModal(false)}
      >
        <label className="block mb-2">New Rates:</label>
        <input
          className="block mb-4"
          type="number"
          value={newRates}
          onChange={(e) => setNewRates(Number(e.target.value))}
        />
        <label className="block mb-2">Make "{selectedRow?.city}" Active</label>
        <input
          type="checkbox"
          id="isActive"
          checked={isActive}
          onChange={() => handleCheckboxChange()}
          className="h-4 w-4 text-blue-600 "
        />

        <div className="flex justify-end space-x-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
}
