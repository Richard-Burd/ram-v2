import SecondaryNavbar from "@/components/SecondaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import BrochureFig from "@/components/BrochureFig";
import { primaryHierarchyProps } from "@/app/outreach/page";

import Brochure from "@/components/Brochure";

export const secondaryHierarchyProps = {
  buttonColor: "bg-outreachButton",
  buttonBackground: "bg-outreachBackground",
  titles: ["Printable Brochures", "Brochure Exhibits"],
  path: "/outreach/brochures",
};

export default function Brochures() {
  return (
    <div>
      <SecondaryNavbar {...primaryHierarchyProps} />
      <FragmentIdentifierNavbar {...secondaryHierarchyProps} />
      <div className="bg-gradient-to-l from-[#088723] to-[#021a07] pb-72">
        <div className="pt-serif-font-700 p-8 text-center text-7xl text-[#c2ffbf] italic">
          Brochures
        </div>
        <div id="printable-brochures">
          <div className="pt-serif-font-wider-700 mx-6 mt-2 border-b-2 border-zinc-100 text-4xl text-zinc-100 italic opacity-95">
            Printable Brochures
          </div>
          <div className="ml-1 flex">
            <Brochure
              title="RAM's Tri-Fold Brochure"
              fileName="fig-3"
              description="This handout is intended to be printed front & back so as to be folded into three segments"
              fileLabel={false}
            />
            <Brochure
              title="RAM's Bi-Fold Brochure"
              fileName="fig-4"
              description="This handout is intended to be printed front & back so as to be folded into two segments"
              fileLabel={false}
            />
          </div>
        </div>
        <div id="brochure-exhibits">
          <div className="pt-serif-font-700 mx-6 mt-2 border-b-2 border-zinc-100 pt-32 text-4xl tracking-wider text-zinc-100 italic">
            Brochure Exhibits
          </div>
          <div className="roboto-font-400 rounded-6xl bg-opacity-70 m-6 bg-[#b8d1c8] px-6 pt-12 pb-16 text-2xl text-zinc-950">
            <div className="text-bloc mb-8">
              <p className="mb-4">
                Everyone contributes to the generation of waste that, as a
                society, we must find responsible means to handle. For much of
                recent history, waste has been seen as having an endpoint as it
                is primarily taken away and buried in landfills. Recent
                recycling efforts locally and nationwide have managed to divert
                only - a surprisingly small percentage of materials from this
                dead end destination. Recognizing that the waste Stream is full
                of valuable materials that have an economic value, a closed loop
                system facilitating recovery, reuse, and re-manufacture of most
                of our waste is possible. For this to become a reality, there
                must be alignment of public desire, government will, and
                economic feasibility.
              </p>
              <p className="mb-4 italic">
                “If you’ve got a customer that wants something, it’s going to
                help. If you have the government, the regulators, that want
                something, it’s going to help. And if the company can make money
                meeting those customer needs or complying with the government,
                ...it’s going to happen.”
              </p>
              <p className="mb-4">
                --David P. Steiner, CEO, Waste Management, Inc.
              </p>
            </div>

            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-1"
              fileName="solid-waste-destination.jpg"
            />

            <div className="text-bloc mt-8">
              <p className="mb-4">
                Landfilling or burning waste causes great damage else- where,
                way beyond what a landfill or incinerator does.
              </p>
            </div>

            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-2"
              fileName="iceberg.jpg"
            />

            <div className="text-bloc mt-8">
              <p className="mb-4">
                <i>RAM</i> has always advocated methods that eliminate
                landfilling and incineration.
              </p>
            </div>

            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-3"
              fileName="net-zero-landfilling.jpg"
            />

            <div className="text-bloc mt-8">
              <p className="mb-4">
                <i>RAM</i> has graphically communicated basic principles that
                are sustainable.
              </p>
            </div>

            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-4"
              fileName="composting.jpg"
            />

            <div className="text-bloc mt-8">
              <p className="mb-4">
                <i>RAM</i> has described high-tech sorting equipment.
              </p>
            </div>

            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-5"
              fileName="trommel.jpg"
            />

            <div className="text-bloc mt-8">
              <p className="mb-4">
                <i>RAM</i> has described low-tech methods too...
              </p>
            </div>

            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-6"
              fileName="ants.jpg"
            />

            <div className="text-bloc mt-8">
              <p className="mb-4">
                <i>RAM</i> has tried humor!
              </p>
            </div>

            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-7"
              fileName="gravel.jpg"
            />

            <div className="text-bloc mt-8">
              <p className="mb-4">
                <i>RAM</i> has tried a variety of graphic techniques to educate,
                but ultimately nothing will happen unless people reading these
                quit sitting on the fence and speak out to their elected
                government officeholders!
              </p>
            </div>

            <div className="text-bloc mt-8">
              <p className="mb-4">
                When <i>RAM</i> began, Davidson and Sumner Counties incinerated
                much of their solid waste. <i>RAM&apos;s</i> efforts to end this
                included education sessions, which explained the Davidson County
                system clearly.
              </p>
            </div>

            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-8"
              fileName="entire-thermal.jpg"
            />

            <div className="text-bloc mt-8">
              <p className="mb-4">
                <i>RAM</i> presented cost/benefit and emissions | comparisons.
                Below is one cost graphed and others listed. As the final few
                years’ totals were added, <i>RAM&apos;s</i> predictions became
                validated.
              </p>
            </div>

            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-9"
              fileName="metro-to-thermal.jpg"
            />

            <div className="text-bloc mt-8">
              <p className="mb-4">
                <i>RAM</i> has graphically shown realities of pollution from
                incineration and ash distribution.
              </p>
            </div>

            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-10"
              fileName="human-intake.jpg"
            />

            <div className="text-bloc mt-8">
              <p className="mb-4">
                <i>RAM</i> calculated recovery percentages.
              </p>
            </div>

            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-11"
              fileName="wet-dry-pow.jpg"
            />

            <div className="text-bloc mt-8">
              <p className="mb-4">
                Wet/dry pilots <i>RAM</i> participated in never achieved less
                than 75% recovery rates.
              </p>
            </div>

            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-12"
              fileName="recovery.jpg"
            />

            <div className="text-bloc mt-8">
              <p className="mb-4">
                While per-capita growth of waste in the U.S. has finally slowed
                — largely due to exporting it as manufacturing has been
                outsourced...
              </p>
            </div>

            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-13"
              fileName="trash.jpg"
            />

            <div className="text-bloc mt-8">
              <p className="mb-4">
                ...Solid waste worldwide is presently projected to double over
                the next 15 years if nothing is done to change present trends!
                <i>RAM&apos;s</i> plan to totally eliminate waste is needed now
                more than ever.
              </p>
            </div>

            <div className="text-bloc mt-8">
              <p className="mb-4">
                Davidson County, like so many other governments, chose recycling
                methods advertised by landfill companies. The damage done has
                been staggering. <i>RAM</i> has tried many ways to show the
                magnitude.
              </p>
            </div>

            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-14"
              fileName="solid-waste-2015.jpg"
            />

            <div className="text-bloc mt-8">
              <p className="mb-4">
                In contrast, <i>RAM</i> constructed pilot demonstrations to
                prove performance of wet/dry methods.
              </p>
            </div>

            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-15"
              fileName="buckets.jpg"
            />

            <div className="text-bloc mt-8">
              <p className="mb-4">
                Following a pilot in Sumner County, in late 1993, Davidson
                County began paying American Ash Recycling. Corp. of TN (AAR) to
                distribute treated incinerator ash as loose construction fill
                material. <i>RAM</i> objected. <i>RAM&apos;s</i> documentation
                was sought by environmental groups in many states. Tired of
                this, AAR sued <i>RAM</i> in early 1997. This forced <i>RAM</i>{" "}
                to investigate further. This led to discoveries which ultimately
                led Davidson County to end both incineration and its use of AAR.
              </p>
            </div>

            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-16"
              fileName="complaints.jpg"
            />

            <div className="text-bloc mt-8">
              <p className="mb-4">
                Over this period, notice how as usage violations became known,
                treated ash shipments slowed.
              </p>
            </div>

            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-17"
              fileName="aar.jpg"
            />

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-18"
              fileName="composting.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-19"
              fileName="davidson-map.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-20"
              fileName="heavy-molded.1.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-21"
              fileName="heavy-molded.2.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-22"
              fileName="jobs.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-23"
              fileName="re-manufacture.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-24"
              fileName="solid-waste-choices.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-25"
              fileName="tax-disparity.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-26"
              fileName="tree.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-27"
              fileName="trees.jpg"
            />
            <br></br>
            <BrochureFig
              originalWidth="50%"
              figureNumber="Fig-28"
              fileName="wet-dry-short.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
