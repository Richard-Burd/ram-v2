"use client";
import React, { useState } from "react";

import TextLink from "@/components/TextLink";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import { primaryHierarchyProps } from "@/app/studies/page";

export const secondaryHierarchyProps = {
  buttonColor: "bg-studiesButton",
  buttonBackground: "bg-studiesBackground",
  titles: ["Reports", "Papers", "Periodicals"],
  path: "/studies/literature",
};

export default function Literature() {
  // manages the initial size of the figures
  const [width, setWidth] = useState("50%"); // Initial width

  // manages the initial size of the figures
  const toggleSize = () => {
    setWidth(width === "50%" ? "100%" : "50%");
  };
  return (
    <div>
      <div className="bg-gradient-to-l from-[#aba528] to-[#5e5a16] pb-16 text-zinc-300 md:from-[#948e22] md:to-[#1a1906]">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <FragmentIdentifierNavbar {...secondaryHierarchyProps} />

        <div
          id="title-and-text-box"
          className="md:rounded-6xl m-4 rounded-3xl bg-neutral-950 p-0 md:m-11 md:p-8"
        >
          <div className="pt-serif-font-700 m-0 p-4 text-center text-5xl text-[#fcffbf] italic md:m-4 md:text-6xl">
            Literature
          </div>
          <div id="reports" className="roboto-font-400 mx-4 mb-24 pt-4">
            <div className="mt-2 mb-2 border-b-2 border-zinc-300 pb-1 text-3xl font-bold md:text-4xl">
              Reports
            </div>
            <div className="text-lg md:text-2xl">
              <div className="mb-8">
                Robin F. Ingenthron, Director of Recycling Programs, Division of
                Solid Waste Management, and Willa S. Kuh, Director,
                Massachusetts Department of Environmental Protection,{" "}
                <i>
                  <TextLink
                    text="Value Added by Recycling Industries in Massachusetts"
                    link="https://archives.lib.state.ma.us/server/api/core/bitstreams/69e179b4-0ea5-4e88-905a-45049d472677/content"
                  />
                </i>
                , July 27, 1992
              </div>

              <div className="mb-8">
                Tellus Institute with Sound Resource Management Group, Inc.,{" "}
                <i>
                  <TextLink
                    text="More Jobs, Less Pollution: Growing the Recycling Economy in the U.S."
                    link="https://www.tellus.org/pub/More%20Jobs,%20Less%20Pollution%20-%20Growing%20the%20Recycling%20Economy%20in%20the%20US.pdf"
                  />
                </i>
                , c. 2009. 64 pages. Clients: BlueGreen Alliance, Teamsters,
                Service Employees International Union (SEIU), Natural Resources
                Defense Council (NRDC), Recycling Works, and Global Alliance for
                Incinerator Alternatives (GAIA)
              </div>
            </div>
          </div>

          <div id="papers" className="mx-4 mb-24 pt-4">
            <div className="mt-2 mb-2 border-b-2 border-zinc-300 pb-1 text-3xl font-bold md:text-4xl">
              Papers
            </div>
            <div className="text-lg md:text-2xl">
              <div className="mb-8">
                Human Space Program, 2021.{" "}
                <i>
                  <TextLink
                    text="Orbital Debris Threatens the Peaceful Use of Space"
                    link="https://medium.com/@humanspaceprogram/orbital-debris-threatens-the-peaceful-use-of-space-bd6fc987df0b"
                  />
                </i>
              </div>
            </div>
          </div>

          <div id="periodicals" className="mx-4 mb-24 pt-4">
            <div className="mt-2 mb-2 border-b-2 border-zinc-300 pb-1 text-3xl font-bold md:text-4xl">
              Periodicals
            </div>
            <div className="text-lg md:text-2xl">
              <div className="periodical-section mb-12">
                <div className="section-title">
                  <TextLink
                    text="BioCycle CONNECT"
                    link="https://www.biocycle.net/"
                  />
                </div>
                <div className="ml-12">Specialty: Composting</div>
              </div>

              <div className="periodical-section mb-12">
                <div className="section-title">
                  <TextLink
                    text="Waste Dive"
                    link="https://www.wastedive.com/"
                  />
                </div>

                <div className="ml-12">Specialty: Solid Waste</div>
              </div>

              <div className="periodical-section mb-12">
                <div className="section-title">
                  <TextLink
                    text="Recycling Today"
                    link="https://www.recyclingtoday.com/"
                  />
                </div>
                <div className="ml-12">Specialty: Recycling</div>
              </div>

              <div className="periodical-section mb-12">
                <div className="section-title">
                  <TextLink
                    text="Waste360 Recycling and Organics Weekly"
                    link="https://www.waste360.com/organics"
                  />
                </div>
                <div className="ml-12">Specialty: Material Recovery</div>
              </div>

              <div className="periodical-section mb-12">
                <div className="section-title">
                  <TextLink
                    text="Construction & Demolition Recycling"
                    link="https://www.cdrecycler.com/"
                  />
                </div>
                <div className="ml-12">Specialty: Demolition</div>
              </div>

              <div className="periodical-section mb-12">
                <div className="section-title">
                  <TextLink
                    text="Waste Today"
                    link="http://wastetodaymagazine.com"
                  />
                </div>
                <div className="ml-12">Specialty: Disposal</div>
              </div>

              <div className="periodical-section mb-12">
                <div className="section-title">
                  <TextLink
                    text="Waste360 Daily Wire"
                    link="https://www.waste360.com"
                  />
                </div>

                <div className="ml-12 pb-6">Specialty: Landfilling</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
