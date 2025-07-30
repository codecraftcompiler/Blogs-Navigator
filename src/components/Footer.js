import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Footer() {

    //consume
    const { page, totalpage, handlePageChange, loading } = useContext(AppContext)

    return (
        <div className="w-full border-t shadow-md p-3 flex justify-center fixed bottom-0 bg-white">
            <div className="w-11/12 max-w-[500px] flex justify-between">
                <div className="flex gap-x-5">
                    {
                        page > 1 && <button onClick={() => handlePageChange(page - 1)} className="rounded-md border px-4 py-1">Previous</button>
                    }
                    {
                        page < totalpage && <button onClick={() => handlePageChange(page + 1)} className="rounded-md border px-4 py-1">Next</button>
                    }
                </div>
                <div>
                    <p className="font-bold text-sm">Page {page} of {totalpage}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;