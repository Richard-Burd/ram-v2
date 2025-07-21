import BrochureFig from "@/components/BrochureFig";

export default function FiguresRichard() {
  return (
    <div className="bg-zinc-900">
      <div className="mx-8 pt-20 text-center text-4xl font-semibold text-zinc-200">
        📚 Figure Gallery of Richard's Scanned Exhibits & Reconfigured PDF Files
        🖼️
      </div>
      <div className="mx-4 px-10 pt-20 text-2xl text-zinc-100">
        Each of the items below are figures that Richard scanned in, or are
        re-ordered PDF files made from Lee's scans, and/or compilations of scans
        done by Richard. The PDF files have a smapp preview with an (optional)
        title & description for each one. The figures are just the images shown
        in a larger format. When the image is too big for the browser viewport
        at full scale, the user can click on the image to inlarge it, and click
        again to shrink it back down.
        <div className="mt-10"></div>
        <div className="mt-10"></div>
        <b>NOTE:</b> the{" "}
        <text className="font-bold text-red-400">red text </text>on the images
        below that says things like
        <text className="young-serif-font font-semibold text-red-400 italic">
          {" "}
          fig-1{" "}
        </text>{" "}
        is only tempoary and will not be on the final website. These are labels
        for all documents (doc) and figures (fig) we plan to put on the website.
        This makes it easy for the crew to discuss moving such-and-such doc or
        fig to a given place in the website.
      </div>
      <div id="documents-list" className="ml-20"></div>
      <div className="roboto-font-400 rounded-6xl m-6 bg-[#cfcfcf] px-6 pt-12 pb-16 text-zinc-950">
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-2.1"
          fileName="Fig-2.1.jpg"
        />
        <div className="mt-10"></div>
        <BrochureFig figureNumber="Fig-8" fileName="entire-thermal.jpg" />
        <div className="mt-10"></div>
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-9"
          fileName="metro-to-thermal.jpg"
        />
        <div className="mt-10"></div>

        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-16"
          fileName="complaints.jpg"
        />
        <div className="mt-10"></div>
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-17"
          fileName="aar.jpg"
        />
        <div className="mt-10"></div>
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-17.1"
          fileName="Fig-17.1.jpg"
        />
        <div className="mt-10"></div>
        {/* same as Fig-4, can be deleted. */}
        {/* <BrochureFig figureNumber="Fig-18" fileName="composting.jpg" /> */}
        <div className="mt-10"></div>
        {/* <BrochureFig
            originalWidth="50%"
            figureNumber="Fig-19.1"
            fileName="Fig-19.1.jpg"
          />
          <div className="mt-10"></div>
          <BrochureFig
            originalWidth="50%"
            figureNumber="Fig-19.2"
            fileName="Fig-19.2.jpg"
          />
          <div className="mt-10"></div> */}
        {/* <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-20"
              fileName="heavy-molded.1.jpg"
            />
            <div className="mt-10"></div>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-21"
              fileName="heavy-molded.2.jpg"
            />
            <div className="mt-10"></div>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-22"
              fileName="jobs.jpg"
            />
            <div className="mt-10"></div>
            <BrochureFig figureNumber="Fig-23" fileName="re-manufacture.jpg" />
            <div className="mt-10"></div> 
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-24"
              fileName="solid-waste-choices.jpg"
            />
            <div className="mt-10"></div>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-25"
              fileName="tax-disparity.jpg"
            />
            <div className="mt-10"></div> */}
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-26"
          fileName="tree.jpg"
        />
        <div className="mt-10"></div>
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-27"
          fileName="trees.jpg"
        />
        <div className="mt-10"></div>
        {/* <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-28"
              fileName="wet-dry-short.jpg"
            />
          <div className="mt-10"></div> 
          <BrochureFig
            originalWidth="50%"
            figureNumber="Fig-29"
            fileName="Fig-29.jpg"
          />
          <div className="mt-10"></div> */}
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-29.1"
          fileName="Fig-29.1.jpg"
        />
        <div className="mt-10"></div>
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-29.2"
          fileName="Fig-29.2.jpg"
        />
        <div className="mt-10"></div>
        {/* <BrochureFig
            originalWidth="50%"
            figureNumber="Fig-30"
            fileName="Fig-30.jpg"
          />
          <div className="mt-10"></div>
          <BrochureFig
            originalWidth="50%"
            figureNumber="Fig-31"
            fileName="Fig-31.jpg"
          />
          <div className="mt-10"></div> */}
        {/* <BrochureFig
            originalWidth="50%"
            figureNumber="Fig-32"
            fileName="Fig-32.jpg"
          />
          <div className="mt-10"></div> */}
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-33.1"
          fileName="Fig-33.1.jpg"
        />
        <div className="mt-10"></div>
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-33.2"
          fileName="Fig-33.2.jpg"
        />
        <div className="mt-10"></div>
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-33.3"
          fileName="Fig-33.3.jpg"
        />
        <div className="mt-10"></div>
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-33.4"
          fileName="Fig-33.4.jpg"
        />
        {/* <div className="mt-10"></div>
        <BrochureFig
          originalWidth="50%"
          figureNumber="Fig-34"
          fileName="Fig-34.jpg"
        /> */}
      </div>
      <div className="pb-48"></div>
    </div>
  );
}
