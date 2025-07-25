import SecondaryNavbar from "@/components/SecondaryNavbar";
import FragmentIdentifierNavbar from "@/components/FragmentIdentifierNavbar";
import SocialMediaIcon from "@/components/SocialMediaIcon";
import { primaryHierarchyProps } from "@/app/about/page";

const socialMediaIconProps = {
  backgroundColor: `#b86d2c`,
  activeBackgroundColor: `#ffe3c2`,
};

export const secondaryHierarchyProps = {
  buttonColor: "bg-aboutButton",
  buttonBackground: "bg-aboutBackground",
  titles: [
    "John van der Harst",
    "Karen Cisler",
    "Michael Goff",
    "Ursula King",
    "Jeff Brousal",
    "Leith Patton",
    "Martha Yanchyshyn",
    "Colleen McLanaghan",
    "Catherine Murray",
    "Lee Nelson",
    "Richard Burd",
    "Anna Haislip",
    "Andrew Evans",
    "A. C. (Sandy) Loyd",
    "Sherry Force",
    "Joe Shedlock",
    "Leslie Allen",
    "Suzanna Lonce",
    "Randy Nocton",
    "Sandy Hepler",
    "Don Miller",
    "Pixie Lewis",
    "Connie Collopy",
    "Connie Kaylor",
    "Connie Lehman",
    "Dan Sweeton",
    "Michael Traugot",
    "Ethel Spiller",
    "Pat McAlpine",
    "Myles Jakubowski",
    "Robert Cox",
  ],
  path: "/about/bios",
};

export const metadata = {
  title: "RAM Biographies",
  description: "team, bio, background, about us, biography, persons",
};

export default function Bios() {
  const crewDescriptionTestLayoutStyles =
    "columns-1 md:columns-2 lg:columns-3 my-7 standard-font-3 text-justify text-lg";
  return (
    <div>
      <div className="bg-gradient-to-l from-[#964609] to-[#4d2406] pb-72 text-zinc-300 md:from-[#873f08] md:to-[#1a0c02]">
        <SecondaryNavbar {...primaryHierarchyProps} />
        <FragmentIdentifierNavbar {...secondaryHierarchyProps} />
        <div
          id="title-and-text-box"
          className="md:rounded-6xl m-4 rounded-3xl bg-neutral-950 p-4 md:m-11 md:p-8"
        >
          <div className="pt-serif-font-700 m-4 p-4 text-center text-3xl text-[#ffe9bf] italic md:text-5xl">
            Some Notable RAM Members
          </div>

          <div id="john-van-der-harst">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              John van der Harst
            </div>
            <div className={crewDescriptionTestLayoutStyles}>
              <div>
                John is a Co-Incorporator, Registered Agent, President, Davidson
                County and out-of-state Contact Person, Newsletter Editor,
                brochure creator and Treasurer for <i>RAM.</i>
              </div>
              <div className="my-4"></div>
              <div>
                His background in Architecture, Landscape Architecture, Civil
                Engineering, Planning, and Illustration was mostly preceded by
                various factory work. Plenty of exposure to management of people
                and materials. John's 31 years of managing <i>RAM</i> was
                preceded by leadership in material recovery methodology for
                other solid waste management advocacy groups. Their limits led
                John to create <i>RAM</i> as a last resort.
              </div>
              <div className="my-4"></div>
              <div>
                John&apos;s studies included touring 196 solid waste facilities
                in 19 states and Ontario, Canada, from 1989 to 1996, with Sandy
                Loyd, and others past then. He organized several pilot wet/dry
                material recovery demonstrations. Hands on.
              </div>
              <div className="my-4"></div>
              <div>
                John focused on internalizing externalized economic and health
                valuations, particularly for waste disposal tip fees. These
                formed the foundation under long but ultimately successful
                campaigns to end combining fly and bottom ash, waste
                incineration, and loose treated ash utilization outside lined
                landfills. In 1993, John&apos;s calculations led him to be the
                only person in Davidson County to campaign for the closure of
                what was then the most economical waste-to-energy plant in the
                U.S. In 2002, it became the only voluntary closure of a large,
                financially viable WTE incinerator with up-to-date air pollution
                control equipment.
              </div>
              <div className="my-4"></div>
              <div>
                John volunteered for, and then worked at, The Re-Use Center,
                Inc., Nashville, TN, in 1996, organizing their paints and other
                chemicals
              </div>
              <div className="my-4"></div>
              <div>
                The mulch/compost operation John proposed still recovers more
                tonnage than any other program in Davidson County, 31 years
                after its implementation -- roughly the weight of one Titanic
                every year. He rallied statewide support that led TN to become
                the first U.S. state to establish soil-based compost quality
                standards as an incentive class. John successfully campaigned
                for permanent household hazardous waste collection centers in
                Davidson County. He led a team effort that changed state law to
                allow Davidson County to charge for all costs associated with
                solid waste disposal. John helped convince Davidson County's
                Solid Waste Region Board to call for a zero-waste plan, but then
                tried and failed to persuade it and the Metropolitan Council of
                Nashville and Davidson County to insist on a Scope of Work that
                would assure that outcome. He's still trying to correct that.
              </div>
              <div className="my-4"></div>
              <div>
                The last 9 years have also included co-founding and management
                (with Michael Goff) of&nbsp;
                <br></br>
                <a
                  href="https://www.urbancruiseship.org"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-300 transition duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline"
                >
                  <strong>Urban Cruise Ship</strong>
                </a>
                &nbsp; which has a Waste site, but also covers all environmental
                issues worldwide and beyond (like Space debris). A project of
                UCS, &nbsp;
                <a
                  href="https://urbanfootnotes.org"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-300 transition duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline"
                >
                  <strong>Urban Foot Notes</strong>
                </a>
                , aims to reduce transportation and construction waste.
              </div>
            </div>
            <center className="mx-0 grid grid-cols-3 content-center md:mx-64">
              <SocialMediaIcon
                icon="recycle"
                hyperLink="https://ram-website-images-and-documents.s3.us-east-2.amazonaws.com/doc-684.pdf"
                {...socialMediaIconProps}
              />
              <SocialMediaIcon
                icon="doc"
                hyperLink="https://ram-website-images-and-documents.s3.us-east-2.amazonaws.com/doc-685.pdf"
                {...socialMediaIconProps}
              />
              <SocialMediaIcon
                icon="email"
                anchorLink="/organizing/contacts/davidson-county"
                {...socialMediaIconProps}
              />
            </center>
          </div>

          <div id="karen-cisler" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Karen Cisler
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Karen is <i>RAM's</i> Secretary, taking over from Leslie Allen.
                She has attended many meetings, provided transportation to
                facility tours, and provided vegan meals prior to many RAM
                meetings.
              </div>
              <div className="my-4"></div>
              <div>She has had a long career as an Analytical Chemist.</div>
              <div className="my-4"></div>
              <div>
                More details of Karen's background and RAM involvement are
                anticipated soon.
              </div>
            </div>
          </div>

          <div id="michael-goff" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Michael Goff
            </div>
            <div className={crewDescriptionTestLayoutStyles}>
              <div>
                Michael volunteered to help <i>RAM</i> shortly after moving to
                Tennessee in 2011 to teach and conduct research for Vanderbilt
                University&apos;s Math Dept. His specialty there: Combinatorics.
                Michael had earned his MS and PhD (2010) degrees at the
                University of Washington, after undergraduate studies at Gonzaga
                University.
              </div>
              <div className="my-4"></div>
              <div>
                He built ties with Metro Nashville Council members -- one whose
                campaign he had worked on -- to assist <i>RAM's</i> education
                efforts. Many meetings with Mayoral and Department staff, and
                Board and Council members followed. Groundwork was laid for the
                Region Board insisting on a zero-waste plan in 2017. Michael
                focused on availability of more sophisticated technologies.
              </div>
              <div className="my-4"></div>
              <div>
                Homework included several field trips to various waste handling
                facilities in three counties.
              </div>
              <div className="my-4"></div>
              <div>
                Michael had previously been active with the Democratic Party in
                Seattle, WA and Washington County, OR. In Nashville, he was also
                active with the Democratic Party, Citizens Climate Lobby,
                Tennesseans for Fair Taxation, and as Advocacy Chair for the
                United Nations Association's Nashville Chapter. It was through
                UNA that Michael was chosen as a 2014 Fellow in East-West: The
                Art of Dialogue, a program of the Shafik Gabr Foundation, to
                foster greater ties between Egypt and the U.S. Several trips
                followed to various cities in both countries.
              </div>
              <div className="my-4"></div>
              <div>
                Michael laid initial groundwork in the state legislature for
                meetings that eventually led to passing legislation in 2016 to
                allow Davidson County to charge for all costs associated with
                solid waste disposal. That removed an excuse used by Metro staff
                for not doing that.
              </div>
              <div className="my-4"></div>
              <div>
                An avid Urban hiker, Michael tried participating in weekly fun
                runs hosted by the East Nasty Running Club. Michael and John
                would run and walk back to Michael's downtown apartment
                afterward, discussing topics that eventually led them to found
                &nbsp;
                <br></br>
                <a
                  href="https://www.urbancruiseship.org"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-300 transition duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline"
                >
                  <strong>Urban Cruise Ship</strong>
                </a>
                &nbsp; in late 2014, with Michael as President and primary
                researcher. In 2016, Michael worked under that label to assess
                solid waste disposal costs incurred by Davidson County, in an
                effort managed by the Tennessee Environmental Council. Today,
                Waste is one of Urban Cruise Ship's nine specialized sites, and
                waste is also covered in its Space site. Michael has presented
                on, and written about, space waste as part of his involvement
                with The Overview Effect's online discussion forum.
              </div>
              <div className="my-4"></div>
              <div>
                Michael was part of YIMBY Action's housing advocacy in San
                Francisco, while doing work for the Breakthrough Institute. He
                completed predictive usage model programming for New York City's
                CitiBike program at The Data Incubator in 2014. Machine learning
                remains a long-held interest, along with game programming.
                Further social involvement currently includes weekly recreation
                evenings for homeless individuals.
              </div>
              <div className="my-4"></div>
              <div>
                Michael prepared to run for Metro Nashville's Council District
                19 in 2015, but bowed out when a candidate entered the race who
                subsequently won two terms and in late 2023 became Nashville's
                Mayor.
              </div>
              <div className="my-4"></div>
              <div>
                Michael currently writes a weekly &nbsp;
                <br></br>
                <a
                  href="https://goff.substack.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-300 transition duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline"
                >
                  <strong>blog at Substack</strong>
                </a>
                , covering a variety of issues related to the environment.
              </div>
            </div>
            <center className="mx-0 grid grid-cols-3 content-center md:mx-64">
              <SocialMediaIcon
                icon="x"
                hyperLink="https://twitter.com/MichaelKGoff"
                {...socialMediaIconProps}
              />
              <SocialMediaIcon
                icon="linkedin"
                hyperLink="https://www.linkedin.com/in/michaelkgoff/"
                {...socialMediaIconProps}
              />
              <SocialMediaIcon
                icon="email"
                anchorLink="mailto:michael@urbancruiseship.org"
                {...socialMediaIconProps}
              />
            </center>
          </div>

          <div id="ursula-king" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Ursula King
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Ursula worked hard with John to pass state legislation allowing
                Davidson County to charge for all costs associated with solid
                waste disposal. She attended <i>RAM</i> and other meetings to
                try to increase material recovery.
              </div>
              <div className="my-4"></div>
              <div>
                Ursula has also been involved with trying to enact statewide
                deposit legislation in TN, and lined up other lobbyists for this
                as well.
              </div>
              <div className="my-4"></div>
              <div>More details are anticipated soon.</div>
            </div>
          </div>

          <div id="jeff-brousal" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Jeff Brousal
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Jeff tried to sensitize the Davidson County Solid Waste Region
                Board to the hazards of solid waste disposal. He has assisted in
                a number of education sessions.
              </div>
              <div className="my-4"></div>
              <div>
                Jeff, a PhD, had tried to work within TN's Department of
                Environment and Conservation for years, before leaving to take
                in even more variety of schooling at TSU.
              </div>
              <div className="my-4"></div>
              <div>More details are anticipated soon.</div>
            </div>
          </div>

          <div id="lee-nelson" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Lee Nelson
            </div>
            {/* <div className={crewDescriptionTestLayoutStyles}> */}
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Lee has been digitally archiving many notebooks full of{" "}
                <i>RAM</i> material for over two years. <i>RAM's</i> dense hard
                copy files take up over 6 feet of shelving and are accompanied
                by over 8 feet of related material.
              </div>
              <div className="my-4"></div>
              <div>
                Lee has been working on&nbsp;
                <a
                  href="https://www.urbancruiseship.org"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-300 transition duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline"
                >
                  <strong>Urban Cruise Ship&apos;s</strong>
                </a>
                &nbsp;graphics and content for over 5 years, including solutions
                on UCS's Waste, Matter, and Energy sites, aimed toward reducing
                various wastes and consumption.
              </div>
              <div className="my-4"></div>
              <div>More details are anticipated soon.</div>
            </div>
            <center className="mx-0 grid grid-cols-3 content-center md:mx-64">
              <SocialMediaIcon
                icon="linkedin"
                hyperLink="https://www.linkedin.com/in/lee-nelson-b5701981"
                {...socialMediaIconProps}
              />
              <SocialMediaIcon
                icon="home"
                hyperLink="https://www.supremelifeforce.info/"
                {...socialMediaIconProps}
              />
              <SocialMediaIcon
                icon="email"
                anchorLink="mailto:lee@urbancruiseship.org"
                {...socialMediaIconProps}
              />
            </center>
          </div>

          <div id="richard-burd" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Richard Burd
            </div>
            {/* <div className={crewDescriptionTestLayoutStyles}> */}
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Richard is <i>RAM&apos;s</i> webmaster, and is taking material
                Lee has digitally archived and adjusting its resolution levels
                for insertion into this website.
              </div>
              <div className="my-4"></div>
              <div>
                Richard has been working on Urban Cruise Ship's Human Endeavors,
                Solutions, Handouts, and website architecture for almost 4
                years. He has also built the&nbsp;
                <a
                  href="https://www.urbanfootnotes.org"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-300 transition duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline"
                >
                  <strong>Urban Foot Notes</strong>
                </a>
                &nbsp;website, a project of&nbsp;
                <a
                  href="https://www.urbancruiseship.org"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-300 transition duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline"
                >
                  <strong>Urban Cruise Ship</strong>
                </a>
                &nbsp;, aiming to reduce transportation and construction waste.
              </div>
              <div className="my-4"></div>
              <div>More details are anticipated soon.</div>
            </div>

            <center className="mx-0 grid grid-cols-3 content-center md:mx-32 md:grid-cols-5">
              <SocialMediaIcon
                icon="linkedin"
                hyperLink="https://www.linkedin.com/in/richardburd/"
                {...socialMediaIconProps}
              />
              <SocialMediaIcon
                icon="home"
                hyperLink="https://richard-burd.github.io/"
                {...socialMediaIconProps}
              />
              <SocialMediaIcon
                icon="github"
                hyperLink="https://github.com/Richard-Burd/"
                {...socialMediaIconProps}
              />
              <SocialMediaIcon
                icon="email"
                anchorLink="mailto:richard@urbancruiseship.org"
                {...socialMediaIconProps}
              />
              <SocialMediaIcon
                icon="x"
                hyperLink="https://x.com/Richard_A_Burd"
                {...socialMediaIconProps}
              />
            </center>
          </div>

          <div id="leith-patton" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Leith Patton
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Leith agreed to be <i>RAM&apos;s</i> contact person in Jackson
                County following the death of Sandy Hepler. During the last year
                of Sandy's life, much of his time was spent at Leith's house
              </div>
              <div className="my-4"></div>
              <div>
                Prior to moving to Jackson County, Leith had lived in Davidson
                County and was quite active on solid waste, particularly
                anti-incineration issues. Her daughter Lila typed address labels
                for <i>RAM&apos;s</i> second newsletter. Her house became the
                staging area for <i>RAM</i> newsletters&apos; bulk mailing
                preparations. Tables and floors full of piles.
              </div>
              <div className="my-4"></div>
              <div>More details are anticipated soon.</div>
            </div>
            <center className="link-icon-set">
              <SocialMediaIcon
                icon="email"
                anchorLink="/organizing/contacts/jackson-county"
                {...socialMediaIconProps}
              />
            </center>
          </div>

          <div id="martha-yanchyshyn" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Martha Yanchyshyn
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Martha has agreed to be <i>RAM&apos;s</i> contact person in
                Stewart County. She had toured Sevier County's co-composting
                plant with Pixie and John, so she had some feel as to what the
                scale of material processing could be like for counties similar
                to her's in size.
              </div>
              <div className="my-4"></div>
              <div>
                Martha has had a long-standing interest in politics. She
                previously ran for office in the State House. The expected style
                of running for office did not suit her tastes. She has been a
                part of the Cumberland Green Bioregional Council for at least 34
                years.
              </div>
              <div className="my-4"></div>
              <div>More details are anticipated soon.</div>
            </div>
            <center className="link-icon-set">
              <SocialMediaIcon
                icon="email"
                anchorLink="/organizing/contacts/stewart-county"
                {...socialMediaIconProps}
              />
            </center>
          </div>

          <div id="colleen-mclanaghan" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Colleen McLanaghan
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Colleen continues to be <i>RAM&apos;s</i> contact person in
                Wayne County after the death of her husband, Randy Nocton, who
                was to be <i>RAM&apos;s</i> contact there until Colleen insisted
                on sharing that role with him.
              </div>
              <div className="my-4"></div>
              <div>Colleen has a nursing background.</div>
              <div className="my-4"></div>
              <div>More details are anticipated soon.</div>
            </div>
            <center className="link-icon-set">
              <SocialMediaIcon
                icon="email"
                anchorLink="/organizing/contacts/wayne-county"
                {...socialMediaIconProps}
              />
            </center>
          </div>

          <div id="catherine-murray" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Catherine Murray
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Catherine agreed to be <i>RAM&apos;s</i> contact person in
                Washington County, with the understanding that she specializes
                in oppositional activities.
              </div>
              <div className="my-4"></div>
              <div>
                Catherine was one of the commenters on the issue of State
                compost quality standards.
              </div>
              <div className="my-4"></div>
              <div>More details are anticipated soon.</div>
            </div>
            <center className="link-icon-set">
              <SocialMediaIcon
                icon="email"
                anchorLink="/organizing/contacts/washington-county"
                {...socialMediaIconProps}
              />
            </center>
          </div>

          <div className="pt-serif-font-700 m-4 mt-40 p-4 text-center text-5xl text-[#ffe9bf] italic">
            Some Notable Past RAM Members
          </div>

          <div id="anna-haislip" className="pt-2">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Anna Haislip
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Anna became involved with <i>RAM</i> in 2011, along with Karen
                Cisler and Michael Goff, after a presentation by John at a
                Nashville Peace & Justice Center forum including four groups.
                She attended many meetings and field trips to tour TN solid
                waste facilities.
              </div>
              <div className="my-4"></div>
              <div>
                Anna pushed for more recent material to be used. Jeff Brousal
                provided that material to John. A better presentation of
                recycling economic value was created as a result.
              </div>
              <div className="my-4"></div>
              <div>
                Anna moved from Davidson County to Cheatham County, and then to
                Rutherford County, and married in the process.
              </div>
              <div className="my-4"></div>
            </div>
          </div>

          <div id="andrew-evans" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Andrew Evans
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Andy attended meetings of Davidson County's Solid Waste Region
                Board, Metro Council, and education sessions for members of
                those bodies.
              </div>
              <div className="my-4"></div>
              <div>
                Andy holds an MS degree in Sociology. He worked for Urban Cruise
                Ship for several months, focusing on transportation.
              </div>
              <div className="my-4"></div>
            </div>
          </div>

          <div id="a.-c.-(sandy)-loyd" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              A. C. (Sandy) Loyd
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                The late Alexander Cicero (Sandy) Loyd (1918-2004) was a
                Co-Incorporator of <i>RAM</i>. He was <i>RAM&apos;s</i>{" "}
                secretary until his death.
              </div>
              <div className="my-4"></div>
              <div>
                Sandy travelled with John to tour a wide variety of solid waste
                facilities in 19 U.S. states and Ontario, Canada, between 1989
                and 1996, generously covering car costs beyond fuel.
              </div>
              <div className="my-4"></div>
              <div>
                Sandy figured out wet/dry material recovery techniques
                independently of other practitioners, and championed that
                methodology. He helped out on logistics of pilot demonstrations
                of those techniques. Sandy also advocated automated cart
                collection long before it became commonly used.
              </div>
              <div className="my-4"></div>
              <div>
                Sandy's drawings of solid waste processing facilities were
                included as Option C in a proposal John submitted to the
                Nashville Thermal Transfer Corporation as it considered
                front-end processing systems. This gained access to the
                selection process, and helped material recovery levels to be
                valued higher in the debate.
              </div>
            </div>
          </div>

          <div id="sherry-force" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Sherry Force
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                The late Sharon Holland (Sherry) Force (1948-2012) accompanied
                John in conducting solid waste education sessions for Board and
                Council members, and other interested citizens, for many years.
                She loved participating in the wet/dry pilot demonstrations at
                the Alliance for Native American Indian Rights annual pow wows.
              </div>
              <div className="my-4"></div>
              <div>
                As an Assistant at Granbery Elementary School, the organization
                she understandably ended up identifying with, Sherry created a
                food waste composting program that provided feedstock for an
                on-site in-vessel composter procured with money diverted from
                the re-carpeting of Metro Nashville's Recycling Office. To
                Metro's further consternation, she also started and managed a
                nonconforming but beloved weekly recycling drop-off at the
                school that doubled as a community gathering event.
              </div>
              <div className="my-4"></div>
              <div>
                Known for her eloquent, prepared addresses at every Region Solid
                Waste Board meeting, Sherry left the last one before her death
                early, in disgust. The Board had become run by the department it
                was supposed to govern -- a headwind almost impossible to
                overcome.
              </div>
              <div className="my-4"></div>
            </div>
          </div>

          <div id="joe-shedlock" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Joe Shedlock
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                The late Joseph Gerard (Joe) Shedlock (1955-2018) joined{" "}
                <i>RAM</i> after leaving an older solid waste-related 501(c)(3)
                organization he had supported due to its tax status. The late
                Gene TeSelle had convinced him that status was a valuable tool.{" "}
                <i>RAM</i> had rejected that status as a government tool to
                restrict activism options. <i>RAM</i> had achieved more than
                Joe's previous group had, over fewer years.
              </div>
              <div className="my-4"></div>
              <div>
                Joe was famous for focusing on minutiae. Joe pointed out a
                grammatical error that had lurked in <i>RAM&apos;s</i> Mission
                Statement unnoticed for over two decades. His correction was
                examined by Leslie Allen, a skilled writer herself. She
                concluded Joe was right. His correction remains part of{" "}
                <i>RAM&apos;s</i> Mission Statement to this day. It's the second
                "Which," which had been a "that."
              </div>
            </div>
          </div>

          <div id="leslie-allen" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Leslie Allen
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                As Leslie had done before, she dove into supporting <i>RAM</i>{" "}
                at what proved to be an unsustainable level. She hosted many{" "}
                <i>RAM</i> meetings at her house, and even a <i>RAM</i>{" "}
                Christmas party. She attended meetings of the Davidson County
                Solid Waste Region Board, the Metro Council, and education
                sessions for members of these and others. She became{" "}
                <i>RAM&apos;s</i> secretary after Sandy Loyd's death.
              </div>
              <div className="my-4"></div>
              <div>
                Ultimately, Leslie's business, I Dream of Weenie, and many other
                long-term friends, required enough attention that involvement
                with <i>RAM</i> became a casualty.
              </div>
            </div>
          </div>

          <div id="suzanna-lonce" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Suzanna Lonce
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Suzanna assisted in several key education sessions, which proved
                very effective tools to change minds on the issue of
                incinerating trash.
              </div>
              <div className="my-4"></div>
              <div>
                She worked in research at Vanderbilt University, and respected{" "}
                <i>RAM&apos;s</i> research.
              </div>
              <div className="my-4">
                Suzanna also tabled for <i>RAM</i> for several years. As the
                years added up, she became unwilling to keep involved for an
                unlimited length of time.
              </div>
              <div></div>
            </div>
          </div>

          <div id="randy-nocton" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Randy Nocton
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                The late Randy Nocton agreed to be <i>RAM&apos;s</i> contact
                person in Wayne County after moving there from Davidson County.
              </div>
              <div className="my-4"></div>
              <div>
                In Davidson County, Randy, a big fan of permaculture,
                specialized in composting. Yet, when Metro's Dept. of Public
                Works proposed a Bordeaux location for the wood waste processing
                operation John had proposed, he opposed it on grounds of
                environmental racism. Randy had a conscience. He was also
                present at a lot of anti-incineration events.
              </div>
              <div className="my-4"></div>
              <div>
                Randy loved street theater, and once dressed up as a green elf
                outside a Tennessee Environmental Council Green Tie fundraiser.
                No tie for Randy. He helped collect cardboard boxes for John to
                build costumes like the much-used Walking Incinerator. Randy was
                fascinated with the plumbing in John's subsequent Walking
                Ashfill costume.
              </div>
              <div className="my-4"></div>
              <div>
                The opportunity to live in the woods in Wayne County proved
                irresistible, along with the opportunity to marry Colleen
                McLanaghan, who wanted to share the <i>RAM</i> contact person(s)
                role with him.
              </div>
            </div>
          </div>

          <div id="sandy-hepler" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Sandy Hepler
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                The late John S. (Sandy) Hepler agreed to be <i>RAM&apos;s</i>{" "}
                contact person in Jackson County. a role which extended past his
                death in the person of his long-term friend, and caretaker for
                his final year, Leith Patton.
              </div>
              <div className="my-4"></div>
              <div>
                Sandy brought John to Hartsville to meet with someone he hoped
                could successfully promote the abandoned Hartsville Nuclear
                Power plant as a recycling center. Sandy later took John on a
                tour of a plastic waste molding start-up in Gainsboro, a
                drop-off site, and the kick-off press announcement for a
                5-county recycling marketing co-op.
              </div>
              <div className="my-4"></div>
              <div>
                When John was sued over his objections to companies treating
                loose incinerator ash and marketing it to under-informed
                building contractors as fill material, Sandy organized a
                well-attended fundraising event at Leith Patton's house. The
                money raised helped show attorney Mary Parker how much support
                John had in the environmental community. Later personal words
                with Mary meant a lot to her as well.
              </div>
            </div>
          </div>

          <div id="don-miller" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Don Miller
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Don was a co-incorporator of <i>RAM</i>. He hosted{" "}
                <i>RAM&apos;s</i> second meeting, in late 1992, in Sumner
                County, and subsequently became <i>RAM&apos;s</i> contact person
                for that county.
              </div>
              <div className="my-4"></div>
              <div>
                He loved working with Sherry Force in pilot wet/dry material
                recovery pilot demonstrations.
              </div>
              <div className="my-4"></div>
              <div>
                Don got <i>RAM&apos;s</i> letterhead printed. To say that was
                used a lot would be a severe understatement.
              </div>
              <div className="my-4"></div>
              <div>
                He volunteered to be <i>RAM&apos;s</i> newsletter editor, but
                was cursed with computer problems and finally gave that task to
                John.
              </div>
            </div>
          </div>

          <div id="pixie-lewis" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Pixie Lewis
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Evelyn (Pixie) Lewis drove Martha Yanchyshyn and John on a field
                trip to the Bedminster co-composting plant in Sevier County. She
                was fascinated with its approach Later, Pixie, like John, was
                interviewed twice on the topic by Michelle Carratu for her
                gardening program on WPLN radio.
              </div>
              <div className="my-4"></div>
              <div>Pixie later moved to Birmingham, AL.</div>
            </div>
          </div>

          <div id="connie-collopy" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Connie Collopy
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Connie attended events like John's court case, press
                conferences, Metro Council's vote on its incinerator's air
                pollution control upgrade, and education sessions. She
                accompanied John to the third showing of a documentary about his
                activism and lifestyle at the 2004 Nashville Film Festival.
              </div>
              <div className="my-4"></div>
              <div>
                Connie later moved to Milwaukee, WI, where she still lives.
              </div>
            </div>
          </div>

          <div id="connie-kaylor" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Connie Kaylor
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Connie typed <i>RAM</i> newsletter articles. She also drove to
                Murfreesboro with John to meet with Recycle Rutherford.
              </div>
              <div className="my-4"></div>
              <div>
                Connie specialized in animal rights. She helped <i>RAM</i>{" "}
                recognize the scale of euthanasia, and waste associated with
                that. Of course, she bolstered <i>RAM&apos;s</i> efforts to
                reduce waste by promoting vegan diets.
              </div>
            </div>
          </div>

          <div id="connie-lehman" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Connie Lehman
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Connie had volunteered to update <i>RAM&apos;s</i> mailing list
                -- an arduous task. That task was postponed -- as it turned out,
                indefinitely -- due to the scale of pressing issues requiring
                immediate attention. Years worth. A folder full of article
                material remains to this day. <i>RAM</i> did a lot of work that
                unfortunately many could never read the details of.
              </div>
            </div>
          </div>

          <div id="dan-sweeton" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Dan Sweeton
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                The late Daville (Dan) Sweeton agreed to be <i>RAM&apos;s</i>{" "}
                contact person in Wilson County. His death ended that role.
              </div>
              <div className="my-4"></div>
              <div>
                Dan's son Terry organized a radio interview and public
                presentation by John in Lebanon. Dan's family -- He, Beverly,
                Terry, Rusty, and the late Timothy -- attended a fundraising
                event organized by Sandy Hepler, at Leith Patton's house, for
                John's legal defence against four related companies promoting
                loose, treated ash use on construction sites.
              </div>
            </div>
          </div>

          <div id="michael-traugot" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Michael Traugot
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Michael agreed to be <i>RAM&apos;s</i> contact person in
                Lawrence County until relinquishing that role after 10 years.
              </div>
              <div className="my-4"></div>
              <div>
                A Harvard grad, Michael taught, and promoted recycling, at The
                Farm School, in Summertown.
              </div>
            </div>
          </div>

          <div id="ethel-spiller" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Ethel Spiller
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Ethel agreed to be <i>RAM&apos;s</i> contact person in Robertson
                County, until she felt the need to retire from that role due to
                advanced age, after 16 years.
              </div>
              <div className="my-4"></div>
              <div>
                Ethel had headed Wastewatchers for years, which specialized in
                opposing landfills. John attended one of their meetings in
                Pulaski, TN.
              </div>
            </div>
          </div>

          <div id="pat-mcalpine" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Pat McAlpine
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Pat agreed to be <i>RAM&apos;s</i> contact person in Humphreys
                County, retiring from that role due to advanced age, after 16
                years.
              </div>
              <div className="my-4"></div>
              <div>
                Pat had become engaged in the solid waste issue after a landfill
                was proposed in Humphreys County.
              </div>
            </div>
          </div>

          <div id="myles-jakubowski" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Myles Jakubowski
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Myles agreed to be <i>RAM&apos;s</i> contact person in Putnam
                County until he bowed out of that role after 10 years.
              </div>
              <div className="my-4"></div>
              <div>
                Myles was involved with the Cumberland Green Bioregional
                Council, which John has been a part of for over 30 years,
                helping waste issues become a frequent topic there.
              </div>
            </div>
          </div>

          <div id="robert-cox" className="pt-40">
            <div className="standard-font-1 mt-2 -mb-2 border-b-2 border-zinc-700 text-3xl md:text-4xl">
              Robert Cox
            </div>
            <div className="standard-font-3 my-7 text-justify text-lg">
              <div>
                Robert went with Sandy Loyd and John van der Harst to the U.S.
                Conference of Mayors/National Association of Counties seminar on
                Municipal Composting, in June 1993, in Sevier County, where John
                had been invited by NACo&apos;s Naomi Friedman to address
                quality issues. Robert might have been the only African American
                there.
              </div>
              <div className="my-4"></div>
              <div>
                Robert had previously served as President of Recycle! Nashville,
                until that group ousted him when a much higher-profile,
                politically more experienced and connected leader became willing
                to take that role. That left Robert feeling quite bitter.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
