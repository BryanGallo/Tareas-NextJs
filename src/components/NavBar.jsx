import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-around items-center font-semibold bg-emerald-700 h-10 text-xl p-8">
            <Link href="/">Tasks</Link>
            <ul className="flex justify-around items-center gap-5">
                <Link
                    href="/"
                    className="border-x-4 p-2 border-emerald-400 hover:bg-emerald-500 rounded-md"
                >
                    Home
                </Link>
                <Link
                    href="/tasks/new"
                    className="border-x-4 p-2 border-emerald-400 hover:bg-emerald-500 rounded-md"
                >
                    New Task
                </Link>
                <Link
                    href="/about"
                    className="border-x-4 p-2 border-emerald-400 hover:bg-emerald-500 rounded-md"
                >
                    About
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
