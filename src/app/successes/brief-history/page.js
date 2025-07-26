import SecondaryNavbar from "@/components/SecondaryNavbar";
import { primaryHierarchyProps } from "@/app/successes/page";

export default function BriefHistory() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#2d6ec2] to-[#173563] pb-16 text-zinc-300 md:from-[#225394] md:to-[#060e1a]">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="md:rounded-6xl m-5 rounded-3xl bg-neutral-950 p-4 md:m-11 md:p-8"
        >
          <div className="pt-serif-font-700 my-4 py-4 text-center text-3xl text-[#bfe6ff] italic md:text-5xl">
            Brief History of Some RAM Successes
          </div>
          <div className="roboto-font-400 mx-8 text-lg md:mx-12 md:text-2xl">
            <ol className="list-outside list-decimal">
              <li id="1" className="py-3">
                Set a high standard for studying issues by touring over 200
                facilities in 19 states and Ontario. 1989-present.
              </li>

              <li id="2" className="py-3">
                Conducted first series of 2-stream wet/dry recycling/composting
                pilots in southeast U.S. (to our knowledge) and tabulated
                statistics (78%-98% recovery), 1991-93.
              </li>

              <li id="3" className="py-3">
                Helped inspire Tennessee Department of Corrections wet/dry
                recycling/composting program, 1991-95.
              </li>

              <li id="4" className="py-3">
                Calculated economic impact of recycling all easily available
                basic materials in basic Davidson County, Tennessee, 1993.
              </li>

              <li id="5" className="py-3">
                Successfully argued against allowing landfills in wetlands in
                Tennessee via an Aquatic Resource Alteration Permit (ARAP),
                1993-final vote, Oct. 4, 1994.
              </li>

              <li id="6" className="py-3">
                Led an effort that resulted in Tennessee being the first U.S.
                state with soil-based compost quality standards as an incentive
                class (Type A), 1993-final vote June 2, 1998.
              </li>

              <li id="7" className="py-3">
                Achieved world&apos;s first and only, to-date (to our
                knowledge),voluntary closure of a large, financially viable
                waste-to-energy plant with up-to-date air pollution control
                equipment (Nashville Thermal Transfer Corp), 1993-Metro Council
                vote Jan. 15, 2002 and closure May 23, 2002.
              </li>

              <li id="8" className="py-3">
                Eliminated permitting of treated incinerator ash as loose
                construction fill material in several states, 1993-present.
              </li>

              <li id="9" className="py-3">
                Supported closure of an unlined Bordeaux landfill in Davidson
                County, Tennessee, accomplished March 19, 1994.
              </li>

              <li id="10" className="py-3">
                Supportive material sent to Cedar Rapids, Iowa, was successfully
                used to end consideration of an incineration and ash
                reutilization proposal, 1994.
              </li>

              <li id="11" className="py-3">
                Successfully advocated for a permanent household hazardous waste
                facility in Davidson County, Tennessee, 1994-96.
              </li>

              <li id="12" className="py-3">
                Successfully persuaded Davidson County, Tennessee to try
                co-collection, 1996.
              </li>

              <li id="13" className="py-3">
                Guided Davidson County to separately monofill fly ash and bottom
                ash, 1997-2002.
              </li>

              <li id="14" className="py-3">
                Documentation sent to Boulder, Colorado, helped city choose
                nonprofit Ecocycle to design and operate a new MRF instead of a
                for-profit proposal, 1998.
              </li>

              <li id="15" className="py-3">
                Successfully argued against use of incineration ast as a plastic
                wood filler in Spokane, Washington, 2001.
              </li>

              <li id="16" className="py-3">
                Helped mobilize successful opposition to a construction and
                demolition landfill proposed for a former quarry off McCrory
                Ln., Davidson County, Tennessee, Council District 35, 2006.
              </li>

              <li id="17" className="py-3">
                Helped stop construction and demolition landfill and outdoor
                transfer station proposed in Davidson County, Tennessee, Council
                District 22, 2012.
              </li>

              <li id="18" className="py-3">
                Helped stop permitting of a transfer station in Davidson County,
                Tennessee, Council District 5, 2012.
              </li>

              <li id="19" className="py-3">
                Calculated an appropriate disposal tax levels in eight different
                ways, 2012.
              </li>

              <li id="20" className="py-3">
                Submitted legislation to achieve an independent disposal tax
                valuation and applications of such a valuation, 2012.
              </li>

              <li id="21" className="py-3">
                Successfully lobbied to change Tennessee state law to allow
                Davidson County to include all costs associated with solid waste
                disposal in assessed fees, 2015, signed into law 2016.
              </li>

              <li id="22" className="py-3">
                Successfully persuaded the Davidson County Solid Waste Region
                Board to call for a Zero-Waste Plan in its 10-year update, for
                the first time, March 2017.
              </li>

              <li id="23" className="py-3">
                Efforts (19 and 20 above) resulted in Scope of Work for plan (22
                above) including "Triple Bottom Line" economic assessment of
                recycling benefits, approved March 2019.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
