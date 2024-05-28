import { NavLink } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import { RiArrowDropDownFill } from "react-icons/ri";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { SiWindows11 } from "react-icons/si";

function Navbar() {
	return (
		<div>
			<nav className="bg-white border-b border-gray-200">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
					<NavLink
						to="/"
						className="flex items-center space-x-3 rtl:space-x-reverse"
					>
						<img
							src={
								process.env.PUBLIC_URL +
								"assets/images/logo_unfluke.png"
							}
							alt=""
							className="w-32"
						/>
					</NavLink>
					<div className="flex items-center space-x-4">
						<div className="flex items-center spacex-1">
							<div className="text-2xl text-amber-400">
								<FaBell />
							</div>
							<div className="text-gray-600">
								<RiArrowDropDownFill className="text-2xl" />
							</div>
						</div>
						<div className="flex items-center spacex-1">
							<div className="text-3xl text-amber-400">
								<TbCoinRupeeFilled />
							</div>
							<div className="text-gray-600 mr-2">0</div>
						</div>
						<div className="flex items-center spacex-1">
							<div className="text-sm text-blue-600 hover:underline">
								<img
									className="w-8 h-8 rounded-full border-2 border-black"
									src={
										process.env.PUBLIC_URL +
										"/assets/images/monkey.5456259d.jpg"
									}
									alt=""
								/>
							</div>
							<div className="text-gray-600">
								<RiArrowDropDownFill className="text-2xl" />
							</div>
						</div>
					</div>
				</div>
			</nav>
			<nav className="bg-white">
				<div className="max-w-screen-xl px-4 py-3 mx-auto">
					<div className="flex items-center">
						<SiWindows11 className="mr-2" />
						<ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
							<li>
								<a
									href="#"
									className="text-sm hover:underline"
									aria-current="page"
								>
									LeaderBoard
								</a>
							</li>
							<li>
								<a
									href="#"
									className="inline-flex text-sm hover:underline content-center"
								>
									Historical Trading
									<RiArrowDropDownFill className="text-2xl" />
								</a>
							</li>
							<li>
								<a href="#" className="text-sm hover:underline">
									Historical Chart
								</a>
							</li>
							<li>
								<a href="#" className="text-sm hover:underline">
									Scanners
								</a>
							</li>
							<li>
								<a href="#" className="text-sm hover:underline">
									Alerts
								</a>
							</li>
							<li>
								<a href="#" className="text-sm hover:underline">
									Basic Backtest
								</a>
							</li>
							<li>
								<a href="#" className="text-sm hover:underline">
									Advanced Backtest
								</a>
							</li>
							<li>
								<a href="#" className="text-sm hover:underline">
									Pricing
								</a>
							</li>
							<li>
								<a href="#" className="text-sm hover:underline">
									My Earnings
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
