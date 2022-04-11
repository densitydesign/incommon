import React from "react"
import "../PannelloInfo.css"
import recomposition01 from "../assets/Recomposition_01@2x.png"
import recomposition03 from "../assets/Recomposition_04@2x.png"
import recomposition04 from "../assets/Recomposition_05@2x.png"
import recomposition05 from "../assets/Recomposition_02@2x.png"
import recomposition06 from "../assets/Recomposition_07@2x.png"
import recomposition07 from "../assets/Recomposition_06@2x.png"
import recomposition08 from "../assets/Recomposition_08@2x.png"
import recomposition09 from "../assets/Recomposition_09@2x.png"

export default function RecompositionPanel() {
  return (
    <div>
      <p>
        <span className={"title-panel"}>Recomposition</span> focuses on a
        selection of individual case studies selected by the research team.
        Treating documents as raw footage, this section plays on the layering of
        materials as a generative technique.
      </p>
      <p>
        {" "}
        Each case study displays the related documents in two ways. First,
        documents can be grouped in small stacks{" "}
        <span>
          <img
            src={recomposition01}
            width={64}
            height={52}
            alt="Recomposition 01"
          />
        </span>{" "}
        by type of material or archive. Second, documents are
      organized in an interactive slideshow. Slideshows regenerate
        performance materials by layering{" "}
        <span>
          <img
            src={recomposition03}
            width={39}
            height={41}
            alt="Recomposition 02"
          />
        </span>{" "}
        them on top of each other, some in their original size{" "}
        <span>
          <img
            src={recomposition04}
            width={26}
            height={44}
            alt="Recomposition 04"
          />
        </span>{" "}
        , others enlarged and cropped{" "}
        <span>
          <img
            src={recomposition05}
            width={65}
            height={43}
            alt="Recomposition 05"
          />
        </span>{" "}
        , others rotated{" "}
        <span>
          <img
            src={recomposition06}
            width={41}
            height={50}
            alt="Recomposition 06"
          />
        </span>{" "}
        . The documents are not treated as such but rather as raw footage: the
        focus shifts to the grains{" "}
        <span>
          <img
            src={recomposition07}
            width={40}
            height={40}
            alt="Recomposition 07"
          />
        </span>{" "}
        , the materials{" "}
        <span>
          <img
            src={recomposition08}
            width={53}
            height={45}
            alt="Recomposition 08"
          />
        </span>{" "}
        , and the textures{" "}
        <span>
          <img
            src={recomposition09}
            width={84}
            height={40}
            alt="Recomposition 09"
          />
        </span>{" "}
        standing out from the layering. The resulting composites are
        ‘speculative visual propositions’ <sup>01</sup>, generating new visions
        of the performance.
      </p>
      <div className={"info-bottom"}>
        <p className={"info-red-bottom"}>
          01—Whitelaw, M. (2018). Mashups and Matters of Concern: Generative
          Approaches to Digital Collections. Open Library of Humanities, 4(1).
          https://doi.org/10.16995/olh.291
        </p>
      </div>
    </div>
  )
}
