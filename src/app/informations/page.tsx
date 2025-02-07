"use client";
import NavigationComponent from "@/components/ui/navigation";
import FooterComponent from "@/components/Home/footer";
import InfoCard from "@/components/ui/info-card";
import policyData from "@assets/data/policy";
import { useState, useEffect } from "react";

export default function Informations() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showInput, setShowInput] = useState<boolean>(false);
  const [inputPage, setInputPage] = useState<string>("");

  const itemsPerPage = 4;

  // Filter the policy data based on search term
  const filteredPolicy = policyData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const maxPage = Math.ceil(filteredPolicy.length / itemsPerPage);

  // Ensure current page is within valid range
  const paginatedPolicy = filteredPolicy.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= maxPage) {
      setCurrentPage(page);
      setShowInput(false);
      setInputPage("");
    }
  };

  const handleInputPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInputPage(value);
    }
  };

  const handleInputSubmit = () => {
    const pageNumber = parseInt(inputPage, 10);
    if (pageNumber >= 2 && pageNumber <= maxPage) {
      handlePageChange(pageNumber);
    }
  };

  // Scroll to top when the page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="flex flex-col min-h-screen bg-main">
      <NavigationComponent />
      <p className="text-white font-title text-3xl text-center mt-10">
        Peraturan Perburuhan
      </p>
      <p className="text-white font-helvetica text-lg text-center my-10">
        Koleksi Peraturan tentang Perburuhan terlengkap untuk kamu akses
      </p>

      <div className="flex flex-col min-h-screen bg-white px-24">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Cari berdasarkan nomor undang-undang atau deskripsi"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to page 1 when searching
            }}
            className="w-2/3 p-2 border border-main text-main rounded-lg my-4"
          />
        </div>

        {paginatedPolicy.map((policy, index) => (
          <InfoCard
            key={index}
            title={policy.title}
            description={policy.description}
            tag={policy.tag}
            yearApplied={policy.yearApplied}
            link={policy.link}
          />
        ))}

        {/* Pagination */}
        {maxPage > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 border border-main text-main rounded ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-main hover:text-white"
              }`}
            >
              Previous
            </button>

            {/* Dynamically update page numbers */}
            {currentPage > 1 && (
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className={`px-3 py-1 border border-main text-main rounded ${
                  currentPage - 1 === currentPage ? "bg-main text-white" : "hover:bg-main hover:text-white"
                }`}
              >
                {currentPage - 1}
              </button>
            )}

            <button
              onClick={() => handlePageChange(currentPage)}
              className="px-3 py-1 border border-main text-white bg-main rounded"
            >
              {currentPage}
            </button>

            {maxPage > currentPage + 1 && (
              <>
                {!showInput ? (
                  <button
                    onClick={() => setShowInput(true)}
                    className="px-3 py-1 border border-main text-main rounded hover:bg-main hover:text-white"
                  >
                    ...
                  </button>
                ) : (
                  <input
                    type="text"
                    value={inputPage}
                    onChange={handleInputPageChange}
                    onBlur={handleInputSubmit}
                    onKeyDown={(e) => e.key === "Enter" && handleInputSubmit()}
                    className="w-12 text-center border border-main text-main rounded"
                    placeholder="..."
                  />
                )}
              </>
            )}

            {/* Last page */}
            {maxPage > currentPage && (
              <button
                onClick={() => handlePageChange(maxPage)}
                className={`px-3 py-1 border border-main text-main rounded ${
                  currentPage === maxPage ? "bg-main text-white" : "hover:bg-main hover:text-white"
                }`}
              >
                {maxPage}
              </button>
            )}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= maxPage}
              className={`px-4 py-2 border border-main text-main rounded ${
                currentPage >= maxPage ? "opacity-50 cursor-not-allowed" : "hover:bg-main hover:text-white"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>

      <FooterComponent />
    </div>
  );
}
