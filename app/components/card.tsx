"use client";

import Image from "next/image";
import Link from "next/link";
import { API_URL } from "../contents";
import { useEffect, useState } from "react";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

async function getCharacters(page = 1) {
  const response = await fetch(`${API_URL}/character?page=${page}`);
  const json = await response.json();
  return json;
}

export default function Card() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [pageRange, setPageRange] = useState({
    start: 1,
    end: 5,
  });

  // 현재 페이지가 변경될 때마다 캐릭터 데이터를 가져오는 useEffect
  useEffect(() => {
    getCharacters(currentPage).then((data) => {
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    });
  }, [currentPage]);

  const handlePageClick = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  // "이전" 및 "다음" 페이지 범위 핸들러
  const handleNextRange = () => {
    setPageRange((prevRange) => {
      const newEnd = Math.min(prevRange.end + 5, totalPages);
      const newStart = prevRange.start + 5;
      return { start: newStart, end: newEnd };
    });
  };

  const handlePreviousRange = () => {
    setPageRange((prevRange) => {
      const newStart = Math.max(1, prevRange.start - 5);
      const newEnd = prevRange.end - 5;
      return { start: newStart, end: newEnd };
    });
  };

  // 페이지네이션 숫자를 생성하는 함수
  const paginationNumbers = () => {
    const length = pageRange.end - pageRange.start + 1;
    return Array.from({ length }, (_, index) => pageRange.start + index);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center sm:p-10 p-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {characters?.map((character: any) => (
          <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow p-4 "
            key={character.id}
          >
            <Link href={`characters/${character.id}`}>
              <Image
                src={character.image}
                width={300}
                height={300}
                alt="character_img"
                style={{ width: "100%", height: "auto", borderRadius: 6 }}
              />
            </Link>
            <div className="py-4">
              <Link href={`characters/${character.id}`}>
                <h5 className="mb-2 sm:text-2xl font-bold tracking-tight text-gray-900">
                  {character.name}
                </h5>
              </Link>
              <p className="mb-3 text-sm sm:text-normal text-gray-700 ">
                status: {character.status}
              </p>
              <p className="mb-3 text-sm sm:text-normal text-gray-700 ">
                species: {character.species}
              </p>

              <Link
                href={`characters/${character.id}`}
                className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between pt-4 items-center">
        <button
          onClick={handlePreviousRange}
          disabled={pageRange.start === 1}
          className="p-1 bg-teal-500 text-white rounded-full mr-3"
        >
          <HiArrowSmallLeft size={20} />
        </button>
        {paginationNumbers().map((number) => (
          <button
            key={number}
            onClick={() => handlePageClick(number)}
            className={`px-3 py-1.5 rounded-full ${currentPage === number ? "bg-neutral-200" : ""}`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={handleNextRange}
          disabled={pageRange.end >= totalPages}
          className="p-1 bg-teal-500 text-white rounded-full ml-3"
        >
          <HiArrowSmallRight size={20} />
        </button>
      </div>
    </main>
  );
}
