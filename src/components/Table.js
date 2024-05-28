import { useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

const Table = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg border-2 border-pink-400">
			<div className="flex items-center justify-between flex-col md:flex-row space-y-4 md:space-y-0 pb-4 bg-white">
				<div>
					<h2 className="text-2xl font-bold p-4">Basic Backtest</h2>
				</div>
				<div className="relative p-4 flex items-center justify-between">
					<div className="w-20 bg-pink-100 p-2 rounded-lg text-center border border-pink-400 font-normal">
						Slippage
					</div>
					<button
						id="dropdownActionButton"
						onClick={toggleDropdown}
						className="w-24 inline-flex items-center text-gray-500 bg-white border border-pink-400 focus:outline-none hover:bg-pink-100 focus:ring-4 focus:ring-pink-100 font-medium rounded-lg text-sm px-3 py-1.5"
						type="button"
					>
						<span className="sr-only">Slippage</span>
						<div className="mr-4">0%</div>
						<RiArrowDropDownLine className="text-2xl ms-3.5 ml-10 text-pink-400" />
					</button>
				</div>
			</div>
			<table className="w-full text-sm text-left rtl:text-right text-gray-500">
				<thead className="text-s text-gray-700 uppercase bg-pink-100 border-b border-t border-pink-400">
					<tr>
						<th scope="col" className="p-4 text-center">
							Rank
						</th>
						<th scope="col" className="px-6 py-3 text-center">
							Name
						</th>
						<th scope="col" className="px-6 py-3 text-center">
							Calmar Ratio
						</th>
						<th scope="col" className="px-6 py-3 text-center">
							Overall Profit
						</th>
						<th scope="col" className="px-6 py-3 text-center">
							Avg. Daily Profit
						</th>
						<th scope="col" className="px-6 py-3 text-center">
							Win %(Day)
						</th>
						<th scope="col" className="px-6 py-3 text-center">
							Price (Rs)
						</th>
						<th scope="col" className="px-6 py-3 text-center">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="bg-white border-b border-pink-400">
						<td className="w-4 p-4">
							<div className="text-black text-lg text-center font-medium">
								1
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							Selling with Re Entr
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<div className="inline-flex items-center">
								<FaArrowTrendUp className="text-pink-500 mr-2" />
								<div>3.96</div>
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							381845
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							319.54
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							0.65
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							-
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<a
								href="#"
								className="text-base font-medium text-pink-600"
							>
								View
							</a>
						</td>
					</tr>
					<tr className="bg-white border-b border-pink-400">
						<td className="w-4 p-4">
							<div className="text-black text-lg text-center font-medium">
								2
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							Strategy Name
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<div className="inline-flex items-center">
								<FaArrowTrendUp className="text-pink-500 mr-2" />
								<div>3.62</div>
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							268872.5
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							216.31
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							0.64
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							500
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<a
								href="#"
								className="text-base font-medium text-pink-600"
							>
								Buy
							</a>
						</td>
					</tr>
					<tr className="bg-white border-b border-pink-400">
						<td className="w-4 p-4">
							<div className="text-black text-lg text-center font-medium">
								3
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							Based on premium and
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<div className="inline-flex items-center">
								<FaArrowTrendUp className="text-pink-500 mr-2" />
								<div>3.42</div>
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							255425
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							208.5
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							0.64
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							-
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<a
								href="#"
								className="text-base font-medium text-pink-600"
							>
								View
							</a>
						</td>
					</tr>
					<tr className="bg-white border-b border-pink-400">
						<td className="w-4 p-4">
							<div className="text-black text-lg text-center font-medium">
								4
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							Strategy Name
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<div className="inline-flex items-center">
								<FaArrowTrendUp className="text-pink-500 mr-2" />
								<div>3.22</div>
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							370845
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							303.47
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							0.65
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							-
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<a
								href="#"
								className="text-base font-medium text-pink-600"
							>
								View
							</a>
						</td>
					</tr>
					<tr className="bg-white border-b border-pink-400">
						<td className="w-4 p-4">
							<div className="text-black text-lg text-center font-medium">
								5
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							Strategy Name
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<div className="inline-flex items-center">
								<FaArrowTrendUp className="text-pink-500 mr-2" />
								<div>3.22</div>
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							370845
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							303.47
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							0.65
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							-
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<a
								href="#"
								className="text-base font-medium text-pink-600"
							>
								View
							</a>
						</td>
					</tr>
					<tr className="bg-white border-b border-pink-400">
						<td className="w-4 p-4">
							<div className="text-black text-lg text-center font-medium">
								6
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							Based on premium wit
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<div className="inline-flex items-center">
								<FaArrowTrendUp className="text-pink-500 mr-2" />
								<div>3.01</div>
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							135980
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							185.77
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							0.49
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							-
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<a
								href="#"
								className="text-base font-medium text-pink-600"
							>
								View
							</a>
						</td>
					</tr>
					<tr className="bg-white border-b border-pink-400">
						<td className="w-4 p-4">
							<div className="text-black text-lg text-center font-medium">
								7
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							Strategy Name
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<div className="inline-flex items-center">
								<FaArrowTrendUp className="text-pink-500 mr-2" />
								<div>2.76</div>
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							267867.5
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							218.49
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							0.6
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							-
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<a
								href="#"
								className="text-base font-medium text-pink-600"
							>
								View
							</a>
						</td>
					</tr>
					<tr className="bg-white border-b border-pink-400">
						<td className="w-4 p-4">
							<div className="text-black text-lg text-center font-medium">
								8
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							Wait and Trade Save
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<div className="inline-flex items-center">
								<FaArrowTrendUp className="text-pink-500 mr-2" />
								<div>2.62</div>
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							178252.5
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							161.9
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							0.63
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							-
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<a
								href="#"
								className="text-base font-medium text-pink-600"
							>
								View
							</a>
						</td>
					</tr>
					<tr className="bg-white border-b border-pink-400">
						<td className="w-4 p-4">
							<div className="text-black text-lg text-center font-medium">
								9
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							Iron Condor
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<div className="inline-flex items-center">
								<FaArrowTrendUp className="text-pink-500 mr-2" />
								<div>2.44</div>
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							176420
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							137.51
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							0.65
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							-
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<a
								href="#"
								className="text-base font-medium text-pink-600"
							>
								View
							</a>
						</td>
					</tr>
					<tr className="bg-white border-b ">
						<td className="w-4 p-4">
							<div className="text-black text-lg text-center font-medium">
								10
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							Strategy Name
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<div className="inline-flex items-center">
								<FaArrowTrendUp className="text-pink-500 mr-2" />
								<div>2.04</div>
							</div>
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							244555
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							198.66
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							0.62
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							-
						</td>
						<td className="px-6 py-4 text-center text-base text-black">
							<a
								href="#"
								className="text-base font-medium text-pink-600"
							>
								View
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Table;
