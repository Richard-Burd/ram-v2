export default function NavbarButton({ title, bgColor }) {
  return (
    <div>
      <div className={`${bgColor} rounded-full shadow-white`}>
        <div className="shadow-lower-right-offset rounded-full">
          <div className="pt-serif-700 text-opacity-80 pr-3 pl-2 text-center text-2xl text-black uppercase italic">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
