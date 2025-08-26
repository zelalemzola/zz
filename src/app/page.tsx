'use client'
import Image from "next/image";
import { EllipsisVertical } from 'lucide-react';
import { useEffect } from "react";
import { NodeNextRequest } from "next/dist/server/base-http/node";
const chats = [
	{
		name: "Tests",
		handle: "@sarahchen5556",
		lastMsg: "Last message 1 week ago",
		firstSeen: "First seen 1 weeks ago",
		img: "/1.jpg"
	},
	{
		name: "Martin O",
		handle: "@martin234234",
		lastMsg: "Last message 2 week ago",
		firstSeen: "First seen 2 weeks ago",
		img: "/2.jpg"
	},
	{
		name: "Rylee Kee",
		handle: "@rygreee",
		lastMsg: "Last message 3 week ago",
		firstSeen: "First seen 3 week ago",
		img: "/3.jpg"
	}
];


export default function Page() {
	useEffect(() => {
		// Set font family for pixel-perfect typography
		document.body.style.fontFamily = 'Inter, "SF Pro Display", "Segoe UI", Arial, sans-serif';
	}, []);
	return (
		<div className="flex items-center justify-center h-screen w-full bg-black">
			<main
				className="w-[910px] h-[258px]   rounded-[24px] flex items-center relative overflow-hidden mx-auto -mt-1 shadow-xl border"
				style={{
					background:
						'linear-gradient(180deg, rgba(18,18,18,0.98) 0%, rgba(60,60,60,0.13) 10%, rgba(0,0,0,0.85) 70%, rgba(60,60,60,0.13) 80%, rgba(0,0,0,0.98) 100%)',
					boxShadow:
						'0 8px 32px 0 rgba(0,0,0,0.45), 0 1.5px 8px 0 rgba(60,60,60,0.10)',
					border: '1px solid rgba(220,220,220,0.13)', // slightly whiter, still subtle
					borderRight: '2px solid rgba(40,40,40,0.35)',
				}}
			>
				{/* Glassmorphism overlays and gradients */}
				<div className="pointer-events-none absolute right-0 bottom-0 w-[80%] h-2/3 z-30 " style={{
					background:
						'linear-gradient(140deg, rgba(10,10,10,0.85) 60%, rgba(10,10,10,0.98) 100%)',
					filter: 'blur(26px)',
				}} />
				<div className="pointer-events-none absolute top-[-22px] right-[210px] w-[46px] h-[110px] z-40 rotate-45" style={{
					background:
						'radial-gradient(circle at 60% 40%, rgba(205,205,205,0.18) 0%, rgba(205,205,205,0.08) 60%, transparent 100%)',
					filter: 'blur(22px)',
				}} />
				<div className="pointer-events-none absolute top-[-16px] right-[90px] w-[20px] h-[90px] z-40 rotate-45" style={{
					background:
						'radial-gradient(circle at 40% 40%, rgba(215,215,215,0.16) 0%, rgba(215,215,215,0.07) 60%, transparent 100%)',
					filter: 'blur(18px)',
				}} />
				<div className="pointer-events-none absolute top-[-8px] right-[70px] w-[6px] h-[80px] z-41" style={{
					background:
						'linear-gradient(90deg, rgba(18,18,18,0.98) 0%, rgba(0,0,0,0.85) 100%)',
					filter: 'blur(19px)',
				}} />
				

				
				<div className="flex-1 pl-10 pt-6">
					<h1 className="text-[23px] font-semibold text-[#b1b0b0] leading-tight m-0 tracking-normal" style={{ fontFamily: 'inherit' }}>
						Test Tests Tests Test<br />
						<span className="text-[#636262] text-[23.5px] font-normal tracking-normal" style={{ fontWeight: 500 }}>
							Test Tests, Test Tests.
						</span>
						<br />
						<span className="text-[#b1b0b0] font-semibold text-[23px] tracking-normal" style={{ fontWeight: 400 }}>
							Tests Tests Tests.
						</span>
					</h1>
					<button
						className="mt-12 py-[6px] px-[22px] rounded-[28px] text-[#e6e4e4] text-[18px] font-semibold cursor-pointer shadow-xl border border-white/30 transition-all duration-150 hover:scale-[1.04] hover:shadow-2xl hover:border-white/50 backdrop-blur-3xl"
						style={{
							background: 'linear-gradient(90deg, #181818 0%,#333333 85%,#333333 75%, #333333 75%,#333333 75%,#333333 75%, #333333 75%, #181818 100%)',
							boxShadow: '0 4px 16px 0 rgba(0,0,0,0.22)',
							borderTop: '0.4px solid rgba(255,255,255,0.28)',
							borderLeft: '0.5px solid rgba(255,255,255,0.28)',
							borderBottom: '1px solid rgba(255,255,255,0.12)',
							borderRight:'0.5px solid rgba(255,255,255,0.28)',
							letterSpacing: '0.01em',
						}}
					>
						Start a Conversation
					</button>
				</div>
				{/* Overlapping chat cards */}
				<div
					className="absolute top-1/2 right-4 z-20 flex flex-col items-center justify-center -mt-[14px]"
					style={{
						height: '240px',
						width: '554px',
						transform: 'translateY(-55%)',
						gap: '0px',
					}}
				>
					{/* Card 1 */}
					<div
						key={chats[0].name}
						className="flex items-center justify-between gap-6 rounded-[22px] p-5  h-[66px] backdrop-blur-xl border border-white/30 relative"
						style={{
							width: '554px',
							background:
								'linear-gradient(0deg, rgba(42,42,42,0.28) 100%,rgba(94,94,94,0.96) 60%, rgba(34,34,34,0.96) 60%, rgba(22,22,22,0.92) 100%)',
							zIndex: 3,
							border: '1px solid rgba(100,100,100,0.28)',
							borderRight:"none",
							marginBottom: '-18px',
							boxShadow:
								'0 1px 16px 0 rgba(0,0,0,0.22), 0 1.5px 8px 0 rgba(60,60,60,0.10)',
							borderBottom: '1.5px solid rgba(215,215,215,0.28)',
						}}
					>
						<div className="flex flex-1.5">
						<div className="relative mr-4 w-12 h-12 flex items-center justify-center">
							<Image
								src={chats[0].img}
								alt={chats[0].name}
								width={48}
								height={48}
								className="rounded-full object-cover w-[45px] h-[45px] shadow-md"
								style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.18)' }}
							/>
							<span
								className="absolute top-0 right-0 w-[15px] h-[15px] bg-green-500 border-[1.5px] border-white rounded-full"
								style={{ boxShadow: '0 0 0 2.5px rgba(0,0,0,0.22)' }}
							></span>
						</div>
						<div className=" min-w-0">
							<div className="font-normal text-[#b1b0b0] text-[18px] truncate tracking-tight" style={{ fontFamily: 'inherit', letterSpacing: '-0.01em' }}>{chats[0].name}</div>
							<div className="text-[#7c7c7c] text-[15px] truncate font-normal tracking-tight" style={{ fontFamily: 'inherit', letterSpacing: '-0.01em' }}>{chats[0].handle}</div>
						</div>
						</div>
						<div className="text-justify min-w-[140px]">
							<div className="text-[#b1b0b0] text-[15px] truncate font-medium tracking-tight" style={{ fontFamily: 'inherit', letterSpacing: '-0.01em' }}>{chats[0].lastMsg}</div>
							<div className="text-[13px] truncate font-normal tracking-tight" style={{ color: '#e1e5eb', fontFamily: 'inherit', letterSpacing: '-0.01em' }}>{chats[0].firstSeen}</div>
						</div>
						<span className="text-[#b1b1b1] text-xs ellipsis-hover transition-colors duration-150 hover:text-[#f8f8f8]">
							<EllipsisVertical color="#797777" fill="#797777" size='18px' />
						</span>
					</div>
					{/* Card 2 */}
					<div
						key={chats[1].name}
						className="flex items-center justify-between gap-6 rounded-[22px] p-5 -mt-[3px] shadow-xl h-[63px] backdrop-blur-lg border border-white/30 relative"
						style={{
							width: '523.4px',
							background:
								'linear-gradient(120deg,rgba(12,12,12,0.98) 100%, rgba(14,14,14,0.96) 60%, rgba(22,22,22,0.92) 100%)',
							zIndex: 2,
							border: '2px solid rgba(120,120,120,0.28)',
							marginBottom: '-18px',
							boxShadow:
								'0 4px 16px 0 rgba(0,0,0,0.22), 0 1.5px 8px 0 rgba(60,60,60,0.10)',
							borderBottom: '1.8px solid rgba(190,190,190,0.28)',
						}}
					>
						<div className="flex gap-4 mr-2 ">
						
						<div className="relative w-12 h-12 flex items-center justify-center">
							<Image
								src={chats[1].img}
								alt={chats[1].name}
								width={48}
								height={48}
								className="rounded-full object-cover w-[45px] h-[45px] shadow-md"
								style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.18)' }}
							/>
							<span
								className="absolute top-0 right-0 w-[12px] h-[12px] bg-green-500 border-[1px] border-white rounded-full"
								style={{ boxShadow: '0 0 0 2.5px rgba(0,0,0,0.22)' }}
							></span>
						</div>
						<div className="flex-1 min-w-0">
							<div className="font-normal text-white text-[18px] truncate tracking-tight" style={{ fontFamily: 'inherit', letterSpacing: '-0.01em' }}>{chats[1].name}</div>
							<div className="text-[#7c7c7c] text-[15px] truncate font-normal tracking-tight" style={{ fontFamily: 'inherit', letterSpacing: '-0.01em' }}>{chats[1].handle}</div>
						</div>
						</div>

						<div className="text-left min-w-[140px] ">
							<div className="text-white text-[15px] truncate font-medium tracking-tight" style={{ fontFamily: 'inherit', letterSpacing: '-0.01em' }}>{chats[1].lastMsg}</div>
							<div className="text-[13px] truncate font-normal tracking-tight" style={{ color: '#e1e5eb', fontFamily: 'inherit', letterSpacing: '-0.01em' }}>{chats[1].firstSeen}</div>
						</div>
						<span className="text-[#b1b1b1] ellipsis-hover transition-colors duration-150 hover:text-[#f8f8f8]">
							<EllipsisVertical color="#b1b1b1" fill="#b1b1b1" size='18px'/>
						</span>
					</div>
					{/* Card 3 */}
					<div
						key={chats[2].name}
						className="flex items-center justify-between gap-6 mt-1 rounded-[22px] p-5 shadow-xl h-[53px] backdrop-blur-xs border border-white/30 relative"
						style={{
							width: '478.11px',
							background:
								'linear-gradient(120deg,rgba(12,12,12,0.98) 100%, rgba(14,14,14,0.96) 60%, rgba(22,22,22,0.92) 100%)',
							zIndex: 1,
							border: '2px solid rgba(120,120,120,0.28)',
							
							boxShadow:
								'0 4px 16px 0 rgba(0,0,0,0.22), 0 1.5px 8px 0 rgba(60,60,60,0.10)',
							borderBottom: '1.5px solid rgba(92,92,92,0.78)',
						}}
					>
						<div className="flex gap-1 mr-[42px] ">
						<div className="relative mr-2 w-12 h-12 flex items-center justify-center">
							<Image
								src={chats[2].img}
								alt={chats[2].name}
								width={48}
								height={48}
								className="rounded-full object-cover w-[45px] h-[45px] shadow-md"
								style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.18)' }}
							/>
							<span
								className="absolute top-0 right-0 w-[15px] h-[15px] bg-green-500 border-[1.5px] border-white rounded-full"
								style={{ boxShadow: '0 0 0 2.5px rgba(0,0,0,0.22)' }}
							></span>
						</div>
						<div className="flex-1 min-w-0">
							<div className="font-normal text-white text-[18px] truncate tracking-tight" style={{ fontFamily: 'inherit', letterSpacing: '-0.01em' }}>{chats[2].name}</div>
							<div className="text-[#7c7c7c] text-[15px] truncate font-normal tracking-tight" style={{ fontFamily: 'inherit', letterSpacing: '-0.01em' }}>{chats[2].handle}</div>
						</div>
						</div>
						<div className="text-left min-w-[140px]">
							<div className="text-white text-[15px] truncate font-medium tracking-tight" style={{ fontFamily: 'inherit', letterSpacing: '-0.01em' }}>{chats[2].lastMsg}</div>
							<div className="text-[13px] truncate font-normal tracking-tight" style={{ color: '#e1e5eb', fontFamily: 'inherit', letterSpacing: '-0.01em' }}>{chats[2].firstSeen}</div>
						</div>
						<span className="text-[#b1b1b1] ellipsis-hover transition-colors duration-150 hover:text-[#f8f8f8]">
							<EllipsisVertical color="#b1b1b1" fill="#b1b1b1" size='18px'/>
						</span>
					</div>
				</div>
				<style>{`
					.ellipsis-hover { cursor: pointer; transition: color 0.15s; }
					@media (max-width: 1024px) {
						main { width: 98vw !important; height: auto !important; min-height: 220px; }
						.flex-1 { padding-left: 1vw !important; padding-right: 1vw !important; }
						.absolute.right-8 { right: 2vw !important; width: 90vw !important; }
					}
					@media (max-width: 600px) {
						main { width: 100vw !important; height: auto !important; min-height: 180px; border-radius: 12px !important; }
						.flex-1 { padding-left: 1vw !important; padding-right: 1vw !important; }
						.absolute.right-8 { right: 1vw !important; width: 98vw !important; }
						.rounded-[22px] { border-radius: 12px !important; }
					}
				`}</style>
			</main>
		</div>
	);
}