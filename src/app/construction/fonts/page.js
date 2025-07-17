export default function Fonts() {
  return (
    <div className="bg-slate-100">
      <div className="m-8 text-2xl">
        Below are some fonts that we can use on the website. They are all from{" "}
        <a
          className="font-semibold text-blue-700 underline"
          href="https://fonts.google.com/"
          target="_blank"
        >
          Google fonts
        </a>{" "}
      </div>
      <div className="p-10 text-4xl text-slate-800">
        <div className="roboto-font-300 mb-6">Roboto Font 300</div>
        <div className="roboto-font-400 mb-6">Roboto Font 400</div>
        <div className="roboto-font-500 mb-6">Roboto Font 500</div>
        <div className="roboto-font-700 mb-6">Roboto Font 700</div>
        <div className="roboto-font-900 mb-6">Roboto Font 900</div>
        <div className="young-serif-font mb-6">Young Serif Font</div>
        <div className="averia-400 mb-6">Averia 400 Font</div>
        <div className="averia-700 mb-6">Averia 700 Font</div>
        <div className="pt-serif-400 mb-6">PT Serif Font 400</div>
        <div className="pt-serif-700 mb-6">
          PT Serif Font 700 (in use for buttons)
        </div>
        <div className="varela-round mb-6">Varela-Round Font</div>
        <div className="varela-round mb-6">
          <b>Varela-Round Font (bold)</b>
        </div>
        <div className="nunito-font-700 mb-6">Nunito Font 700</div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="bg-neutral-900 p-10 tracking-wide text-gray-100">
          <div className="title-example">
            <div className="young-serif-font mb-2 text-4xl italic">
              Recycling Advocates of Middle Tennessee
            </div>
            <div className="roboto-font-400 mb-24 pl-10 text-2xl">
              Font: (Young Serif)
            </div>
          </div>

          <div className="title-example">
            <div className="averia-400 mb-2 text-4xl italic">
              Recycling Advocates of Middle Tennessee
            </div>
            <div className="roboto-font-400 mb-24 pl-10 text-2xl">
              Font: (Averia 400)
            </div>
          </div>

          <div className="title-example">
            <div className="averia-700 mb-2 text-4xl italic">
              Recycling Advocates of Middle Tennessee
            </div>
            <div className="roboto-font-400 mb-24 pl-10 text-2xl">
              Font: (Averia 700)
            </div>
          </div>

          <div className="title-example">
            <div className="pt-serif-400 mb-2 text-4xl italic">
              Recycling Advocates of Middle Tennessee
            </div>
            <div className="roboto-font-400 mb-24 pl-10 text-2xl">
              Font: (PT Serif 400)
            </div>
          </div>

          <div className="title-example">
            <div className="pt-serif-700 mb-2 text-4xl italic">
              Recycling Advocates of Middle Tennessee
            </div>
            <div className="roboto-font-400 mb-24 pl-10 text-2xl">
              <div>Font: (PT Serif 700)</div>
              <div>NOTE: this is what's used on the button mockups below</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
