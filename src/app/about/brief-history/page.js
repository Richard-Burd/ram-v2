import SecondaryNavbar from "@/components/SecondaryNavbar";
import { primaryHierarchyProps } from "@/app/about/page";

export default function BriefHistory() {
  return (
    <div>
      <div className="bg-gradient-to-l from-[#964609] to-[#4d2406] pb-72 text-zinc-300 md:from-[#873f08] md:to-[#1a0c02]">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="md:rounded-6xl m-4 rounded-3xl bg-neutral-950 p-0 md:m-11 md:p-8"
        >
          <div className="pt-serif-font-700 m-0 p-4 text-center text-4xl text-[#ffe9bf] italic md:m-4 md:text-7xl">
            Brief History
          </div>
          <div className="roboto-font-400 m-0 p-4 text-lg md:m-4 md:text-2xl">
            <div id="line-1" className="mb-8">
              <div className="title font-semibold underline">
                Late 1992 -late 1993
              </div>
              <div className="paragraph">
                <i>RAM</i> forms and organizes itself into a full-functioning
                group.
              </div>
            </div>
            <div id="line-2" className="mb-8">
              <div className="title font-semibold underline">
                Late 1993-1996
              </div>
              <div className="paragraph">
                <i>RAM</i> starts and develops work on a large number of issues,
                including compost regulations, incinerator closure, and ash
                treatment.
              </div>
            </div>
            <div id="line-3" className="mb-8">
              <div className="title font-semibold underline">1997-2000</div>
              <div className="paragraph">
                American Ash Recycling Corp. et al lawsuits dominate the waste
                issue for <i>RAM</i> -- limiting efforts on other waste matters.
              </div>
            </div>
            <div id="line-4" className="mb-8">
              <div className="title font-semibold underline">2001-2002</div>
              <div className="paragraph">
                Final pushes score wins on incinerator closure and ash
                treatment. Pennsylvanians then request help on both of those
                issues.
              </div>
            </div>
            <div id="line-5" className="mb-8">
              <div className="title font-semibold underline">2002-2004</div>
              <div className="paragraph">
                Multiple media profiles lead to Cliff Vaughn/Red Clay Pictures
                documentary <i>Immaterial John</i> shown at Nashville Film
                Festival.
              </div>
            </div>
            <div id="line-6" className="mb-8">
              <div className="title font-semibold underline">2005-2010</div>
              <div className="paragraph">
                Climate change, Iraq war, economic collapse, and health care,
                all draw public attention away from improving material recovery
                methods.
              </div>
            </div>
            <div id="line-7" className="mb-8">
              <div className="title font-semibold underline">2011-2016</div>
              <div className="paragraph">
                With several new members, <i>RAM&apos;s</i> efforts to improve
                material recovery in Davidson County resume, but ultimately only
                get money allocated for an expensive new plan.
              </div>
            </div>
            <div id="line-8" className="mb-8">
              <div className="title font-semibold underline">2015-2016</div>
              <div className="paragraph">
                Six <i>RAM</i> members meet with legislators to draft and then
                successfully pass legislation allowing Davidson County to assess
                for all costs incurred as a result of disposal.
              </div>
            </div>
            <div id="line-9" className="mb-8">
              <div className="title font-semibold underline">2016</div>
              <div className="paragraph">
                John tries to use Tennessee Environmental Council to manage an
                independent assessment of Davidson County&apos;s full disposal
                costs. TEC fails, managerially. Good work by Urgan Cruise
                Ship&apos;s Michael Goff is discounted, and bad work by Freeman
                Applegate isn&apos;t fixed.
              </div>
            </div>
            <div id="line-10" className="mb-8">
              <div className="title font-semibold underline">2017-2019</div>
              <div className="paragraph">
                Davidson County citizens get Board commitment for a zero-waste
                plan, which is then neutered by disposal-favoring staff and
                consultants.
              </div>
            </div>
            <div id="line-11" className="mb-8">
              <div className="title font-semibold underline">2020-2022</div>
              <div className="paragraph">
                Urban Cruise Ship, founded by <i>RAM&apos;s</i> Michael Goff and
                John van der Harst in late 2014 to focus on energy solutions,
                fully converts to a broad scope format, with Waste being one of
                9 sites.
              </div>
            </div>
            <div id="line-12" className="mb-8">
              <div className="title font-semibold underline">2023</div>
              <div className="paragraph">
                Urban Cruise Ship, realizing <i>RAM&apos;s</i> value, creates
                and builds a website for RAM.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
