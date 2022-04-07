import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-md-4">
          <div>
            <div className="label-footer">Funded by</div>
            <div className="d-flex align-items-center">
              <div>
                <img
                  src={'/logo-erc-eu.svg'}
                  alt="Logo ERC"
                  width={233}
                  height={100}
                />
              </div>
              <div className="text-project">
                This project has received funding from the European Research
                Council (ERC) under the European Union's Horizon 2020 research
                and innovation programme (grant agreement No 678711)
              </div>
            </div>
            <div className="copyright-text-footer">
              The information and views set out in this website are those of the
              author(s) and do not necessarily reflect the official opinion of
              the European Union. Neither the European Union Institutions and
              bodies nor any person acting on their behalf may be held
              responsible for the use which may be made of the information
              contained therein.
            </div>
          </div>
        </div>
        <div className="col-md-8 d-flex justify-content-end">
          <div className="d-flex pl-5">
            <div>
              <div className="label-footer">HOST INSTITUTION</div>
              <a
                href="http://www.iuav.it/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/iuav-footer.svg"
                  alt="Iuav"
                  width={207}
                  height={142}
                />
              </a>
            </div>
            <div className="ml-30">
              <div className="label-footer">PARTNER INSTITUTION</div>
              <a
                href="https://www.uniroma1.it/it/pagina-strutturale/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/sapienza.svg"
                  alt="Università Sapienza"
                  width={159}
                  height={48}
                />
              </a>
              <div className="label-footer mt-3">BACK-END DEVELOPMENT</div>
              <a
                href="https://www.elan42.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/elan.svg" alt="Elan" width={159} height={39} />
              </a>
            </div>
            <div className="ml-30">
              <div className="label-footer">VISUAL IDENTITY</div>
              <a
                href="https://spavisualdesign.it/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/spa.svg" alt="Spa" width={101} height={157} />
              </a>
            </div>
            <div className="ml-30">
              <div className="label-footer mb-3">DESIGNED AND DEVELOPED BY</div>
              <a
                href="https://densitydesign.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/density.png"
                  alt="Density Design"
                  width={86}
                  height={100}
                />
              </a>
              <a
                href="https://www.inmagik.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="ml-4"
                  src="/inmagik.svg"
                  alt="Inmagik"
                  width={95}
                  height={95}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
