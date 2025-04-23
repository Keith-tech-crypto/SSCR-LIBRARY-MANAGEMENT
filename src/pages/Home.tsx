
import React from "react";

const studentDetails = [
  { id: "2023102738", name: "Keith", course: "BSIT", purpose: "Requesting" },
  { id: "2023102727", name: "Dann", course: "BSIT", purpose: "Borrowing" },
  { id: "2023103841", name: "Khem", course: "BSIT", purpose: "Returning" },
];

const bookDetails = [
  { id: "1", name: "Java", author: "Author Name", location: "Borrowed" },
  { id: "2", name: "C++", author: "Author Name", location: "Returned" },
  { id: "3", name: "S.A.D", author: "Author Name", location: "Requested" },
];

const stats = [
  { label: "NO. OF BOOKS", value: "4", icon: "/lovable-uploads/136fb620-96d4-496c-8b3d-f6b8179c004f.png" },
  { label: "NO. OF STUDENTS", value: "3", icon: "/lovable-uploads/136fb620-96d4-496c-8b3d-f6b8179c004f.png" },
  { label: "ISSUED BOOKS", value: "3", icon: "/lovable-uploads/136fb620-96d4-496c-8b3d-f6b8179c004f.png" },
  { label: "DEFAULTER LIST", value: "1", icon: "/lovable-uploads/136fb620-96d4-496c-8b3d-f6b8179c004f.png" },
];

// Side navigation data (icon, label, route)
const navLinks = [
  { icon: "home", label: "HOME", route: "/home" },
  { icon: "layout-dashboard", label: "LMS DASHBOARD", route: "#" },
  { label: "FEATURES", isTitle: true },
  { icon: "layout-list", label: "MANAGE BOOKS", route: "#" },
  { icon: "user", label: "MANAGE STUDENTS", route: "#" },
  { icon: "key-square", label: "ISSUE BOOK", route: "#" },
  { icon: "key-round", label: "RETURN BOOKS", route: "#" },
  { icon: "layout-grid", label: "VIEW RECORDS", route: "#" },
  { icon: "mail", label: "VIEW ISSUED BOOKS", route: "#" },
  { icon: "lock", label: "DEFAULTER LIST", route: "#" },
  { label: "LOGOUT", isLogout: true, route: "/" },
];

import { Home as HomeIcon, LayoutDashboard, User, LayoutList, KeySquare, KeyRound, LayoutGrid, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const icons = {
  home: HomeIcon,
  "layout-dashboard": LayoutDashboard,
  "layout-list": LayoutList,
  user: User,
  "key-square": KeySquare,
  "key-round": KeyRound,
  "layout-grid": LayoutGrid,
  mail: Mail,
  lock: Lock,
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen min-w-full flex flex-col bg-white">
      {/* Top bar */}
      <div className="flex items-center h-20 px-7" style={{ background: '#FFDC3D', borderBottom: '2px solid #beae22' }}>
        <img src="/lovable-uploads/279838fe-eb35-465a-ab85-fd3312906e24.png" alt="LOGO" className="h-16 w-16 mr-5" />
        <span
          className="font-bebas text-3xl md:text-4xl font-bold tracking-widest"
          style={{
            color: "#CF1C27",
            fontFamily: '"Bebas Neue", sans-serif',
            textShadow: "0px 2px 0px #0002",
            letterSpacing: "0.08em",
            fontWeight: 700,
          }}
        >
          LIBRARY SYSTEM MANAGEMENT
        </span>
      </div>
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <div className="bg-sscr-yellow border-r-2 border-black min-h-full min-w-[245px] py-5 px-1 flex flex-col">
          {navLinks.map((l, i) =>
            l.isTitle ? (
              <div key={i} className="mt-8 mb-2 px-4 text-lg text-sscr-red font-bebas tracking-widen select-none" style={{ letterSpacing: "0.03em" }}>{l.label}</div>
            ) : (
              <button
                key={i}
                className={`flex items-center gap-3 p-2 px-5 rounded hover:bg-[#fcc90030] w-full text-left font-bebas my-1 group 
                  ${l.isLogout ? "mt-20 text-red-700 font-bold" : "text-[#CF1C27] font-bold"}`
                }
                onClick={() => {
                  if (l.route) navigate(l.route);
                }}
              >
                {l.icon &&
                  React.createElement(icons[l.icon], {
                    className: "w-6 h-6 mr-2",
                  })}
                <span
                  className="tracking-wider"
                  style={{
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontSize: "1.15rem",
                  }}
                >
                  {l.label}
                </span>
              </button>
            )
          )}
        </div>

        {/* Main content */}
        <div className="flex-1 p-7 bg-gray-100 overflow-auto">
          {/* Statistics cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, idx) => (
              <div key={stat.label} className="bg-gray-200 border-2 border-black rounded-lg flex flex-col items-center justify-center px-4 py-5 text-center shadow-md">
                <div className="mb-1 text-[#CF1C27] font-bebas text-xl" style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 700, letterSpacing: "0.03em" }}>
                  {stat.label}
                </div>
                <img src={stat.icon} alt={stat.label} className="w-12 h-12 mx-auto mb-1" />
                <div className="font-extrabold text-3xl text-[#222]">{stat.value}</div>
              </div>
            ))}
          </div>
          {/* Student & Book Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Student Details */}
            <div>
              <div className="text-2xl text-center text-sscr-red font-bebas mb-2 tracking-wider" style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 700 }}>STUDENT DETAILS</div>
              <div className="bg-white border-2 border-black rounded-md overflow-x-auto">
                <table className="min-w-full text-sm font-bebas">
                  <thead>
                    <tr className="bg-sscr-yellow text-sscr-red">
                      <th className="p-2 border">STUDENT ID</th>
                      <th className="p-2 border">NAME</th>
                      <th className="p-2 border">COURSE</th>
                      <th className="p-2 border">PURPOSE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentDetails.map((s) => (
                      <tr key={s.id} className="text-center">
                        <td className="border p-2">{s.id}</td>
                        <td className="border p-2">{s.name}</td>
                        <td className="border p-2">{s.course}</td>
                        <td className="border p-2">{s.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Book Details */}
            <div>
              <div className="text-2xl text-center text-sscr-red font-bebas mb-2 tracking-wider" style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 700 }}>BOOK DETAILS</div>
              <div className="bg-white border-2 border-black rounded-md overflow-x-auto">
                <table className="min-w-full text-sm font-bebas">
                  <thead>
                    <tr className="bg-sscr-yellow text-sscr-red">
                      <th className="p-2 border">BOOK ID</th>
                      <th className="p-2 border">BOOK NAME</th>
                      <th className="p-2 border">AUTHOR</th>
                      <th className="p-2 border">LOCATION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookDetails.map((b) => (
                      <tr key={b.id} className="text-center">
                        <td className="border p-2">{b.id}</td>
                        <td className="border p-2">{b.name}</td>
                        <td className="border p-2">{b.author}</td>
                        <td className="border p-2">{b.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
