import React, { useEffect, useState } from "react";
// import axios from "axios";
import axiosInstance from "./request";
import { BeatLoader } from "react-spinners";
import Coin from "./components/Coin";

const URL =
	"https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		axios
			.get(URL)
			.then((res) => {
				setCoins(res.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const handleDarkMode = () => {
		const body = document.querySelector("#body");
		isDarkMode ? body.classList.remove("dark") : body.classList.add("dark");
		setIsDarkMode(!isDarkMode);
	};

	const filteredCoins = coins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="font-mono">
			<h1 className="text-center text-purple-700 dark:text-gray-400 font-bold text-2xl py-3">
				ADev Cryto Tracker
			</h1>
			<div className="flex flex-row mb-8 pt-4 items-center justify-center space-x-10">
				<form className="justify-self-center">
					<input
						className="w-52 md:w-96 outline-none ring-2 md:ring-4 ring-purple-300 focus:ring-purple-400 rounded-full px-4 py-2 dark:ring-gray-200 dark:focus:ring-gray-400"
						type="text"
						placeholder="Search for Currency"
						onChange={handleChange}
					/>
				</form>
				<button
					className={
						"flex rounded-full p-3 focus:outline-none " +
						(isDarkMode ? "bg-purple-500" : "bg-gray-300")
					}
					onClick={handleDarkMode}
				>
					{isDarkMode ? (
						<svg
							className="w-8 h-8 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						</svg>
					) : (
						<svg
							className="w-8 h-8 text-purple-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					)}
				</button>
			</div>
			<div className="text-center">
				{isLoading ? (
					<>
						<BeatLoader color="violet" />
					</>
				) : (
					<>
						<table className="mx-auto">
							<thead>
								<tr className="font-semibold text-xl text-gray-800 dark:text-gray-200">
									<td className="pr-8">Image</td>
									<td className="pr-8">Name</td>
									<td className="pr-8">Price</td>
									<td className="pr-8">24H % Change</td>
									<td className="invisible sm:visible pr-8">
										24H Volume
									</td>
									<td className="invisible md:visible">
										Market Cap
									</td>
								</tr>
							</thead>
							<tbody>
								{filteredCoins.map((coin) => {
									return (
										<Coin
											key={coin.id}
											name={coin.name}
											image={coin.image}
											symbol={coin.symbol}
											price={coin.current_price}
											volume={coin.total_volume}
											priceChange={
												coin.price_change_percentage_24h
											}
											marketCap={coin.market_cap}
										/>
									);
								})}
							</tbody>
						</table>
					</>
				)}
			</div>
		</div>
	);
};

export default App;
