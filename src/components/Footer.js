import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-xl-4 col-lg-12">
          <div>
            <div className="label-footer">Funded by</div>
            <div className="d-xl-block d-lg-flex d-md-flex align-items-xl-start align-items-lg-center align-items-md-center">
              <div className="d-flex flex-xl-column">
                <div>
                  <img
                    src={'/logo-erc-eu.svg'}
                    alt="Logo ERC"
                    width={233}
                    height={100}
                  />
                </div>
                <div className="col-md-6 text-project pl-xl-0 pl-lg-5 pt-xl-3 pt-lg-0 pl-md-5">
                  This project has received funding from the European Research
                  Council (ERC) under the European Union's Horizon 2020 research
                  and innovation programme (grant agreement No 678711)
                </div>
              </div>
              <div className="col-md-6 col-xl-12 copyright-text-footer pl-xl-0 mt-xl-5  mt-lg-0 pl-lg-5 pl-md-5">
                The information and views set out in this website are those of
                the author(s) and do not necessarily reflect the official
                opinion of the European Union. Neither the European Union
                Institutions and bodies nor any person acting on their behalf
                may be held responsible for the use which may be made of the
                information contained therein.
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-xl-8 col-lg-12 d-flex justify-content-xl-end">
          <div className="d-flex pl-xl-5 mt-lg-5 mt-md-5 mt-xl-0">
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
                  width={150}
                  height={103}
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
                  width={150}
                  height={45.2}
                />
              </a>
              <div className="label-footer mt-3">BACK-END DEVELOPMENT</div>
              <a
                href="https://www.elan42.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/elan.png" alt="Elan" width={140} height={35} />
              </a>
            </div>
            <div className="ml-30">
              <div className="label-footer">VISUAL IDENTITY</div>
              <a
                href="https://spavisualdesign.it/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/spa.svg" alt="Spa" width={78} height={121.2} />
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
                  src="/density.svg"
                  alt="Density Design"
                  width={70}
                  height={80.9}
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
                  width={76}
                  height={76}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
