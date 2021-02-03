import React from "react";

const Coin = ({
	name,
	image,
	symbol,
	price,
	volume,
	priceChange,
	marketCap,
}) => {
	return (
		<tr className="text-center mx-auto">
			<td className="pr-8">
				<img
					className="w-8 h-8 bg-white rounded-full mx-auto"
					src={image}
					alt={`${name}-${symbol}`}
				/>
			</td>
			<td className="pr-8">
				<h1 className="text-lg text-gray-800 dark:text-gray-200">
					{name}
				</h1>
				<p className="text-sm text-gray-500 dark:text-gray-400">
					{symbol.toUpperCase()}
				</p>
			</td>
			<td className="pr-8">
				<p className="dark:text-gray-200 text-lg text-gray-800">
					₹ {price}
				</p>
			</td>
			{priceChange > 0 ? (
				<td className="pr-8">
					<p className="text-green-500">{priceChange.toFixed(2)}%</p>
					<svg
						className="w-4 h-4 mx-auto text-green-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 10l7-7m0 0l7 7m-7-7v18"
						/>
					</svg>
				</td>
			) : (
				<td className="pr-8">
					<p className="text-red-500">{priceChange.toFixed(2)}%</p>
					<svg
						className="w-4 h-4 text-red-400 mx-auto"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</td>
			)}
			<td className="pr-8">
				<p className="invisible sm:visible dark:text-gray-200 text-gray-800">
					₹ {volume.toLocaleString()}
				</p>
			</td>
			<td className="pr-8">
				<p className="invisible md:visible dark:text-gray-200 text-gray-800">
					₹ {marketCap.toLocaleString()}
				</p>
			</td>
		</tr>
	);
};

export default Coin;
