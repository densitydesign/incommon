import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import './Home.css'
import Footer from '../../components/Footer'
import { Modal, ModalBody } from 'reactstrap'

const ARCHIVIO = 'performance-remains'
const SPETTACOLO = 'recomposition'
const FORMA = 'the-shape-of-community'
const LUOGHI = 'times-and-places'
const CATALOGO = 'catalogue'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(null)
  const firstORef = useRef()
  const secondORef = useRef()
  const [video, setVideo] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      if (firstORef.current) {
        firstORef.current.style.transform = 'translateY(0)'
        firstORef.current.style.animation =
          '1.2s cubic-bezier(0.46, 0, 0.07, 1) 1s 1 forwards'
      }
      if (secondORef.current) {
        secondORef.current.style.transform = 'translateY(0)'
      }
    }, 1000)
  })

  return (
    <div className="Home">
      <div className="TopHomeSvg">
        <div className="ContainerSvg">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290.7 104.3"><path d="M152.9 18.3c.8 1.1 1.8 1.6 3.2 1.6 1.5 0 2.6-.6 3.4-1.7.7-1.1 1.1-2.5 1.1-4.3 0-1.9-.4-3.4-1.1-4.5-.7-1.2-1.8-1.7-3.3-1.7-1.3 0-2.4.5-3.2 1.5-.8 1-1.2 2.5-1.2 4.4 0 2.1.3 3.6 1.1 4.7m10-1.3c-.3 1-.7 1.9-1.3 2.6-.5.7-1.2 1.3-2 1.7-.8.4-1.7.6-2.8.6-1.1 0-2.1-.2-2.9-.7-.8-.4-1.5-1.1-2-2l.1 7.2c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-11.6-.1-8.5c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 2.2c.5-.9 1.2-1.6 2-2.1s1.8-.8 2.9-.8c1.1 0 2 .2 2.8.6.8.4 1.5 1 2 1.7s.9 1.6 1.2 2.6c.3 1 .4 2.1.4 3.2.2 1.2.1 2.3-.2 3.3M175.6 9.1c-.7-.9-1.8-1.4-3.2-1.4-1.3 0-2.3.4-3 1.2-.7.8-1.2 1.9-1.4 3.4h8.7c0-1.3-.4-2.3-1.1-3.2m3.5 7.1c.1 0 .2 0 .2.1.1.1.1.1.1.2-.2 1.6-.9 2.9-2.1 3.9-1.2 1-2.7 1.5-4.7 1.5-1.2 0-2.3-.2-3.2-.6-.9-.4-1.7-1-2.3-1.7-.6-.7-1.1-1.6-1.4-2.6-.3-1-.5-2.1-.5-3.3 0-1.2.2-2.3.5-3.3s.8-1.9 1.5-2.6c.6-.7 1.4-1.3 2.3-1.7.9-.4 1.9-.6 3-.6 2.2 0 4 .7 5.3 2.2 1.3 1.5 1.9 3.5 2 6 0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-11.4c0 1.9.5 3.3 1.2 4.3.8 1 1.9 1.5 3.5 1.5 1.1 0 2-.3 2.7-.9.7-.6 1.2-1.4 1.4-2.5 0-.1.1-.2.2-.2.1-.1.2-.1.2-.1h1.8zM182.1 21.7c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-7.6-.1-7.3c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2V9c.6-1 1.3-1.8 2.3-2.3.9-.5 2-.8 3-.8h.4c.2 0 .3 0 .4.1.1 0 .2.1.2.1.1.1.1.1.1.2v1.6c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-.9c-1.3 0-2.4.4-3.4 1.2-1 .8-1.6 2-1.8 3.7l.1 8.2c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2zM197 14.6l.1 6.7c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-6.7V8.2h-2.1c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2V6.4c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1V4.7c0-.8.1-1.6.4-2.2.2-.6.6-1.1.9-1.4.4-.4.8-.6 1.3-.8.5-.2 1-.2 1.5-.2.3 0 .7 0 1 .1.4 0 .7.1.9.2.1 0 .2.1.2.2.1.1.1.2.1.2v1.4c0 .1 0 .1-.1.2-.1 0-.1.1-.2 0-.2 0-.4-.1-.6-.1h-.7c-.6 0-1.1.2-1.5.6-.4.4-.5 1.1-.5 2.1v1h3.3c.1 0 .2 0 .2.1.1.1.1.1.1.2v1.5c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1H197v6.5zM204.7 18.4c.8 1.1 1.9 1.6 3.4 1.6s2.7-.5 3.4-1.6c.8-1.1 1.1-2.6 1.1-4.5s-.4-3.5-1.1-4.5c-.8-1.1-1.9-1.6-3.4-1.6s-2.7.6-3.4 1.7c-.8 1.1-1.2 2.6-1.2 4.5.1 1.8.4 3.3 1.2 4.4m8.9 1.4c-1.3 1.5-3.1 2.3-5.5 2.3-2.3 0-4.2-.7-5.5-2.2-1.3-1.5-1.9-3.5-1.9-5.9 0-2.5.6-4.5 1.9-6 1.3-1.5 3.1-2.3 5.5-2.3s4.2.7 5.5 2.2c1.3 1.5 1.9 3.5 1.9 5.9 0 2.5-.6 4.5-1.9 6M217.8 21.7c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-7.6-.1-7.3c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 2.5c.6-1 1.3-1.8 2.3-2.3.9-.5 2-.8 3-.8h.4c.2 0 .3 0 .4.1.1 0 .2.1.2.1.1.1.1.1.1.2v1.6c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-.9c-1.3 0-2.4.4-3.4 1.2-1 .8-1.6 2-1.8 3.7l.1 8.2c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.1zM230.8 15.6l.1 5.8c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-5.8-.2-9.2c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 2.3c.5-.8 1.1-1.5 1.9-2.1.8-.6 1.8-.9 2.9-.9 1.1 0 2.1.3 2.8.8.8.5 1.3 1.4 1.7 2.5.6-1.1 1.3-1.9 2.1-2.5.8-.6 1.8-.8 2.9-.8 1.5 0 2.7.5 3.6 1.5.9 1 1.3 2.6 1.3 4.7v3.7l.1 5.8c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-5.8V12c0-1.5-.3-2.5-.8-3.1-.5-.6-1.3-1-2.2-1-.8 0-1.6.4-2.3 1.1-.7.7-1.2 1.7-1.5 3v3.6l.1 5.8c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1H238c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-5.8V12c0-1.5-.3-2.5-.8-3.1-.5-.6-1.3-1-2.2-1-.9 0-1.7.4-2.4 1.2-.7.8-1.2 2-1.5 3.5v3zM252.8 4.1c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2V1.4c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.2c.1 0 .2 0 .2.1.1.1.1.1.1.2v2.3c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2zm-.1 17.6c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-7.7-.1-7.2c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.2c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 7.2.1 7.7c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2zM258.3 21.7c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-6.8-.1-8.2c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 2.3c.5-.8 1.2-1.5 2-2.1.9-.6 1.9-.9 3.2-.9 1.6 0 2.9.5 3.8 1.6.9 1.1 1.4 2.6 1.4 4.6V15l.1 6.3c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.1c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-6.3v-3c0-1.4-.3-2.4-.9-3.1-.6-.7-1.4-1-2.4-1s-1.9.4-2.7 1.2c-.8.8-1.3 2-1.6 3.5v8.7c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2zM276.9 18.1c.8 1 1.9 1.5 3.4 1.5 1.3 0 2.3-.5 3.1-1.4.8-.9 1.2-2.4 1.2-4.3 0-1.8-.3-3.3-1-4.3-.7-1.1-1.6-1.7-2.9-1.8h-.8c-1.4.1-2.4.7-3.1 1.7-.7 1.1-1 2.5-1 4.2-.1 1.9.3 3.3 1.1 4.4m8.4 7.7c-1.2 1.2-2.9 1.8-5.2 1.8-.9 0-1.7-.1-2.5-.3-.8-.2-1.5-.5-2.1-.9-.6-.4-1.1-.9-1.5-1.5-.4-.6-.6-1.3-.7-2.2 0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2c.1 0 .2 0 .3.1.1.1.1.1.1.2.1.9.6 1.6 1.3 2.1.7.4 1.6.7 2.7.7 1.3 0 2.4-.4 3.1-1.2s1.1-2.1 1.1-3.8v-1.7c-.5.9-1.2 1.5-2 2s-1.8.7-2.9.7c-1.1 0-2.1-.2-2.9-.6-.8-.4-1.5-.9-2.1-1.6-.6-.7-1-1.5-1.3-2.5-.3-1-.4-2-.4-3.1s.1-2.1.4-3.1c.3-1 .7-1.8 1.3-2.5s1.2-1.3 2.1-1.7c.8-.4 1.7-.6 2.8-.6 1.1 0 2.1.2 2.9.7.8.5 1.5 1.1 2 2l-.1-2.1c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 5.9.1 8.3c.4 2.2-.2 3.9-1.4 5.2M156.3 44.1c.7 1.2 1.8 1.7 3.3 1.7 1.3 0 2.4-.5 3.2-1.5.8-1 1.2-2.5 1.2-4.4 0-1.8-.3-3.3-1-4.4-.7-1.1-1.6-1.7-2.8-1.8h-.8c-1.4.1-2.4.7-3.1 1.7-.7 1.1-1 2.5-1 4.2-.1 1.9.3 3.4 1 4.5m7.9 3.5c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-2.2c-.5.9-1.2 1.6-2 2.1s-1.8.8-2.9.8c-1.1 0-2-.2-2.8-.6-.8-.4-1.5-1-2-1.7s-.9-1.6-1.2-2.6c-.3-1-.4-2-.4-3.2 0-1.1.1-2.2.4-3.2.3-1 .7-1.9 1.3-2.6.5-.7 1.2-1.3 2-1.7.8-.4 1.7-.6 2.8-.6 1.1 0 2.1.2 2.9.7.8.5 1.5 1.1 2 2l-.1-2.1c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 7.3.1 7.6c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2zM169.5 47.6c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-7.6-.1-7.3c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 2.6c.6-1 1.3-1.8 2.3-2.3.9-.5 2-.8 3-.8h.4c.2 0 .3 0 .4.1.1 0 .2.1.2.1.1.1.1.1.1.2v1.6c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-.9c-1.3 0-2.4.4-3.4 1.2-1 .8-1.6 2-1.8 3.7l.1 8.2c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.1zM187.9 47.1c0 .1 0 .2-.1.3l-.2.2c-.3.1-.6.2-1 .2-.4.1-.7.1-1 .1-1.1 0-2.1-.3-3-1-.8-.7-1.3-1.9-1.3-3.6v-9.2h-1.7c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2v-1.5c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h1.7l-.1-3.6c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.2c.1 0 .2 0 .2.1.1.1.1.1.1.2V32h3.5c.1 0 .2 0 .2.1.1.1.1.1.1.2v1.5c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1H184v9.1c0 .9.2 1.6.5 1.9.3.4.8.5 1.5.5h.8c.3 0 .5-.1.7-.1h.2c.1.1.1.1.1.2v1.4zM202 45.1c-.3.6-.8 1.1-1.4 1.5-.6.4-1.3.7-2 .9-.8.2-1.6.3-2.5.3-2 0-3.7-.5-5-1.3-1.3-.9-2-2.3-2.1-4.1 0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2c.1 0 .2 0 .2.1.1.1.1.1.1.2.1 1.2.5 2.1 1.2 2.7.7.6 1.8.8 3.2.8 1.2 0 2.1-.2 2.8-.7.7-.5 1-1.1 1-2 0-1-.6-1.7-1.7-1.9-1.1-.3-2.3-.5-3.6-.8-1.3-.2-2.5-.6-3.6-1.2s-1.7-1.6-1.7-3.2c0-1.5.6-2.6 1.7-3.4 1.1-.8 2.6-1.2 4.5-1.2 1.8 0 3.3.4 4.5 1.2 1.2.8 1.9 2 2 3.5 0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-1.9c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2-.1-1-.5-1.7-1.2-2.1-.7-.5-1.6-.7-2.7-.7s-1.9.2-2.5.6c-.6.4-1 1-1 1.9 0 1 .6 1.6 1.7 1.8 1.1.2 2.3.5 3.6.7 1.3.2 2.5.6 3.6 1.2s1.7 1.7 1.7 3.3c-.1 1-.3 1.6-.6 2.2M210 30c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2v-2.3c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.2c.1 0 .2 0 .2.1.1.1.1.1.1.2v2.3c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1H210zm-.1 17.6c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-7.7-.1-7.2c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.2c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 7.2.1 7.7c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2zM215.5 47.6c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-6.8-.1-8.2c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 2.3c.5-.8 1.2-1.5 2-2.1.9-.6 1.9-.9 3.2-.9 1.6 0 2.9.5 3.8 1.6.9 1.1 1.4 2.6 1.4 4.6v3.1l.1 6.3c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.1c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-6.3v-3c0-1.4-.3-2.4-.9-3.1-.6-.7-1.4-1-2.4-1s-1.9.4-2.7 1.2c-.8.8-1.3 2-1.6 3.5v8.7c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2zM236.5 47.6c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.2-10.5-.2-10.1c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.2c.1 0 .2 0 .2.1.1.1.1.1.1.2v10.1l.2 10.5c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.4zM250.4 47.1c0 .1 0 .2-.1.3l-.2.2c-.3.1-.6.2-1 .2-.4.1-.7.1-1 .1-1.1 0-2.1-.3-3-1-.8-.7-1.3-1.9-1.3-3.6v-9.2h-1.7c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2v-1.5c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h1.7l-.1-3.6c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.2c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 3.6h3.5c.1 0 .2 0 .2.1.1.1.1.1.1.2v1.5c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-3.5v9.1c0 .9.2 1.6.5 1.9.3.4.8.5 1.5.5h.8c.3 0 .5-.1.7-.1h.2c.1.1.1.1.1.2v1.4zM255.5 44.1c.7 1.2 1.8 1.7 3.3 1.7 1.3 0 2.4-.5 3.2-1.5.8-1 1.2-2.5 1.2-4.4 0-1.8-.3-3.3-1-4.4-.7-1.1-1.6-1.7-2.8-1.8h-.8c-1.4.1-2.4.7-3.1 1.7-.7 1.1-1 2.5-1 4.2-.1 1.9.2 3.4 1 4.5m7.8 3.5c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2V45c-.5.9-1.2 1.6-2 2.1s-1.8.8-2.9.8c-1.1 0-2-.2-2.8-.6-.8-.4-1.5-1-2-1.7s-.9-1.6-1.2-2.6-.4-2-.4-3.2c0-1.1.1-2.2.4-3.2.3-1 .7-1.9 1.3-2.6.5-.7 1.2-1.3 2-1.7.8-.4 1.7-.6 2.8-.6 1.1 0 2.1.2 2.9.7.9.5 1.5 1.1 2 2l-.1-2.1c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 7.3.1 7.6c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.1zM269.8 47.6c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-10.4-.1-10.2c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 10.1.1 10.4c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.1zM281.7 52.4c0 .1-.1.2-.2.2-.1.1-.2.1-.3.1h-1.9c-.1 0-.1 0-.2-.1 0-.1-.1-.1 0-.2l1.6-4.9-6.1-15.3V32c0-.1.1-.1.2-.1h2.4c.1 0 .2 0 .3.1.1.1.2.1.2.2l4.4 11.7 3.8-11.7c0-.1.1-.2.2-.2.1-.1.2-.1.3-.1h2.2c.1 0 .1 0 .2.1 0 .1.1.1 0 .2l-7.1 20.2zM205.7 73.5c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-10.2-.1-7.4c-.6.5-1.2 1-2 1.4-.7.4-1.5.7-2.3 1h-.2c-.1-.1-.1-.1-.1-.2v-1.7c0-.1 0-.2.1-.3.1-.1.1-.2.2-.2.9-.3 1.7-.8 2.4-1.3s1.3-1.1 1.8-1.8l.2-.2c.1 0 .2-.1.3-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.2 10.9.2 9.6c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2zM215.5 62.9c.7.9 1.7 1.4 3.1 1.4s2.5-.4 3.2-1.3c.8-.9 1.2-2 1.2-3.6 0-1.5-.4-2.8-1.1-3.8-.8-1-1.8-1.5-3.2-1.5-1.4 0-2.4.5-3.2 1.4-.8.9-1.1 2.2-1.1 3.8.1 1.5.4 2.7 1.1 3.6m8.6 8.1c-1.4 1.9-3.3 2.9-5.7 2.9-1.8 0-3.2-.4-4.2-1.3s-1.7-2.2-1.9-3.8c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2.1.9.5 1.7 1.1 2.2.6.5 1.4.8 2.4.8 1.5 0 2.7-.7 3.5-2.1.8-1.4 1.2-3.3 1.2-5.7-.5.8-1.2 1.4-2.1 1.9-.9.4-1.9.7-3.1.7-2 0-3.6-.6-4.8-1.9-1.2-1.2-1.8-2.9-1.8-5 0-1.1.2-2.1.5-3.1.4-1 .9-1.8 1.5-2.5s1.4-1.2 2.3-1.6c.9-.4 1.8-.6 2.9-.6 2.3 0 4.2.9 5.5 2.7 1.3 1.8 2 4.5 2 8.2.1 3.5-.6 6.2-2 8.2M240 71.7c-1.4 1.5-3.2 2.2-5.4 2.2-2.1 0-3.8-.5-4.9-1.6-1.1-1.1-1.8-2.5-2-4.3 0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.2c.1 0 .2 0 .2.1.1.1.1.1.1.2.1 1.1.5 2 1.2 2.7.7.7 1.7 1 2.9 1 1.4 0 2.4-.5 3.2-1.5.8-1 1.2-2.4 1.2-4.3 0-1.8-.4-3.1-1.1-4s-1.8-1.4-3.2-1.4c-1.1 0-1.9.3-2.6.8-.7.5-1.1 1.3-1.4 2.2 0 .1-.1.2-.2.2-.1.1-.2.1-.3.1h-1.8c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.7-10.9c0-.1.1-.2.1-.2.1-.1.1-.1.2-.1h11.1c.1 0 .2 0 .2.1.1.1.1.1.1.2v1.6c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-9l-.5 5.7c.6-.7 1.2-1.2 2-1.5.8-.3 1.7-.5 2.6-.5.9 0 1.8.2 2.6.5s1.5.8 2.1 1.5c.6.6 1 1.4 1.4 2.3.3.9.5 2 .5 3.1.2 2.7-.5 4.6-1.9 6.1M247.2 62.9c.7.9 1.7 1.4 3.1 1.4s2.5-.4 3.2-1.3c.8-.9 1.2-2 1.2-3.6 0-1.5-.4-2.8-1.1-3.8-.8-1-1.8-1.5-3.2-1.5-1.4 0-2.4.5-3.2 1.4-.8.9-1.1 2.2-1.1 3.8.1 1.5.4 2.7 1.1 3.6m8.6 8.1c-1.4 1.9-3.3 2.9-5.7 2.9-1.8 0-3.2-.4-4.2-1.3s-1.7-2.2-1.9-3.8c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2.1.9.5 1.7 1.1 2.2.6.5 1.4.8 2.4.8 1.5 0 2.7-.7 3.5-2.1.8-1.4 1.2-3.3 1.2-5.7-.5.8-1.2 1.4-2.1 1.9-.9.4-1.9.7-3.1.7-2 0-3.6-.6-4.8-1.9-1.2-1.2-1.8-2.9-1.8-5 0-1.1.2-2.1.5-3.1.4-1 .9-1.8 1.5-2.5s1.4-1.2 2.3-1.6c.9-.4 1.8-.6 2.9-.6 2.3 0 4.2.9 5.5 2.7 1.3 1.8 2 4.5 2 8.2.1 3.5-.6 6.2-2 8.2M272.7 73c0 .1 0 .2-.1.3l-.2.2c-.3.1-.6.2-1 .2-.4.1-.7.1-1 .1-1.1 0-2.1-.3-3-1-.8-.7-1.3-1.9-1.3-3.6V60h-1.7c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2v-1.5c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h1.7l-.1-3.6c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.2c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 3.6h3.5c.1 0 .2 0 .2.1.1.1.1.1.1.2v1.5c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-3.5v9.1c0 .9.2 1.6.5 1.9.3.4.8.5 1.5.5h.8c.3 0 .5-.1.7-.1h.2c.1 0 .1.1.1.2V73zM277 70.2c.8 1.1 1.9 1.6 3.4 1.6s2.7-.5 3.4-1.6c.8-1.1 1.1-2.6 1.1-4.5s-.4-3.5-1.1-4.6c-.8-1.1-1.9-1.6-3.4-1.6s-2.7.6-3.4 1.7c-.8 1.1-1.2 2.6-1.2 4.5.1 2 .5 3.5 1.2 4.5m9 1.4c-1.3 1.5-3.1 2.3-5.5 2.3-2.3 0-4.2-.7-5.5-2.2-1.3-1.5-1.9-3.5-1.9-5.9 0-2.5.6-4.5 1.9-6 1.3-1.5 3.1-2.3 5.5-2.3s4.2.7 5.5 2.2c1.3 1.5 1.9 3.5 1.9 5.9 0 2.5-.7 4.5-1.9 6M239 99.4c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-10.2-.1-7.4c-.6.5-1.2 1-2 1.4-.7.4-1.5.7-2.3 1h-.2c-.1-.1-.1-.1-.1-.2V82c0-.1 0-.2.1-.3.1-.1.1-.2.2-.2.9-.3 1.7-.8 2.4-1.3s1.3-1.1 1.8-1.8l.2-.2c.1-.1.2-.1.3-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.2 10.9.2 9.6c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1H239zM248.8 88.8c.7.9 1.8 1.4 3.1 1.4 1.4 0 2.5-.4 3.2-1.3.8-.9 1.2-2 1.2-3.6 0-1.5-.4-2.8-1.1-3.8-.8-1-1.8-1.5-3.2-1.5-1.4 0-2.4.5-3.2 1.4-.8.9-1.1 2.2-1.1 3.8 0 1.5.4 2.7 1.1 3.6m8.5 8.1c-1.4 1.9-3.3 2.9-5.7 2.9-1.8 0-3.2-.4-4.2-1.3s-1.7-2.2-1.9-3.8c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2.1.9.5 1.7 1.1 2.2.6.5 1.4.8 2.4.8 1.5 0 2.7-.7 3.5-2.1.8-1.4 1.2-3.3 1.2-5.7-.5.8-1.2 1.4-2.1 1.9-.9.4-1.9.7-3.1.7-2 0-3.6-.6-4.8-1.9-1.2-1.2-1.8-2.9-1.8-5 0-1.1.2-2.1.5-3.1.4-1 .9-1.8 1.5-2.5s1.4-1.2 2.3-1.6c.9-.4 1.8-.6 2.9-.6 2.3 0 4.2.9 5.5 2.7 1.3 1.8 2 4.5 2 8.2.2 3.5-.5 6.3-2 8.2M268.6 89.5c-1.1 3.1-1.9 6.3-2.4 9.6 0 .1-.1.2-.2.2-.1.1-.2.1-.2.1h-2.3c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2.3-1.7.6-3.3 1-5 .4-1.7.8-3.3 1.4-4.8.5-1.6 1.1-3.1 1.7-4.6.6-1.5 1.3-2.9 2.1-4.2H260c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2v-1.6c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h12.1c.1 0 .2 0 .2.1.1.1.1.1.1.2V80.5c0 .1-.1.2-.1.3-1.4 2.7-2.6 5.6-3.7 8.7M276.8 88.8c.7.9 1.8 1.4 3.1 1.4 1.4 0 2.5-.4 3.2-1.3.8-.9 1.2-2 1.2-3.6 0-1.5-.4-2.8-1.1-3.8-.8-1-1.8-1.5-3.2-1.5-1.4 0-2.4.5-3.2 1.4-.8.9-1.1 2.2-1.1 3.8 0 1.5.4 2.7 1.1 3.6m8.5 8.1c-1.4 1.9-3.3 2.9-5.7 2.9-1.8 0-3.2-.4-4.2-1.3s-1.7-2.2-1.9-3.8c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2.1.9.5 1.7 1.1 2.2.6.5 1.4.8 2.4.8 1.5 0 2.7-.7 3.5-2.1.8-1.4 1.2-3.3 1.2-5.7-.5.8-1.2 1.4-2.1 1.9-.9.4-1.9.7-3.1.7-2 0-3.6-.6-4.8-1.9-1.2-1.2-1.8-2.9-1.8-5 0-1.1.2-2.1.5-3.1.4-1 .8-1.8 1.5-2.5.6-.7 1.4-1.2 2.3-1.6.9-.4 1.8-.6 2.9-.6 2.3 0 4.2.9 5.5 2.7 1.3 1.8 2 4.5 2 8.2.1 3.5-.6 6.3-2 8.2M.7 50.7c-.2 0-.3-.1-.5-.2-.1-.2-.2-.4-.2-.5l.3-22.1L0 6.5c0-.2.1-.3.2-.5s.3-.2.5-.2h4.7c.2 0 .3.1.5.2.1.1.2.3.2.5l-.3 21.4.4 22.1c0 .2-.1.3-.2.5-.2.1-.3.2-.5.2H.7zM18.7 32l.1 18c0 .2-.1.3-.2.5-.2.1-.3.2-.5.2h-4.4c-.2 0-.3-.1-.5-.2-.1-.1-.2-.3-.2-.5l.3-22-.4-21.5c0-.2.1-.3.2-.5.1-.1.3-.2.5-.2h5.6c.2 0 .4.1.6.2.2.1.4.2.5.4L43.8 43l-.1-3.9-.1-14.1-.1-18.5c0-.2.1-.3.2-.5.1-.1.3-.2.5-.2h4.4c.2 0 .3.1.5.2.1.2.2.3.2.5L49 27.9l.3 22c0 .2-.1.3-.2.5-.1.1-.3.2-.5.2h-5.9c-.2 0-.4-.1-.6-.2-.2-.1-.4-.2-.5-.4L18.4 14l.1 4.8.2 13.2zM87.8 47.4c-3.4 2.7-7.6 4.1-12.7 4.1-6.5 0-11.7-2.1-15.4-6.2-3.7-4.2-5.6-9.9-5.6-17.1 0-3.5.5-6.7 1.5-9.6 1-2.9 2.4-5.3 4.2-7.3 1.8-2 4-3.6 6.6-4.6C69 5.5 71.9 5 75.1 5c2.2 0 4.3.3 6.4.8 2 .5 3.9 1.4 5.5 2.7 1.6 1.2 3 2.9 4.2 4.8 1.2 2 2 4.4 2.6 7.3 0 .2 0 .3-.1.5s-.3.2-.4.2h-4.5c-.2 0-.3-.1-.5-.2s-.3-.3-.3-.5c-.7-3.6-2.2-6.3-4.5-8-2.3-1.7-5.1-2.6-8.4-2.6-4.7 0-8.3 1.6-10.8 4.9-2.6 3.3-3.8 7.7-3.8 13.3 0 6 1.3 10.6 3.9 13.7 2.6 3.1 6.2 4.7 10.8 4.7 3.7 0 6.7-1 9-3s3.7-4.9 4.2-8.6c0-.2.1-.3.3-.5.2-.1.3-.2.5-.2h4.6c.2 0 .3.1.4.2.1.1.2.3.2.5-1.1 5.6-3.2 9.7-6.6 12.4M5.7 81.9l.1 16.8c0 .2-.1.3-.2.5-.2.1-.3.2-.5.2H.9c-.2 0-.3-.1-.5-.2-.1-.2-.2-.3-.2-.5l.3-21.3-.3-22.1c0-.2.1-.3.2-.5.1-.1.3-.2.5-.2h6.7c.2 0 .4.1.6.2.2.1.3.3.4.4l14.2 36.6 13.8-36.6c0-.2.2-.3.4-.4.2-.1.4-.2.6-.2h6.3c.2 0 .3.1.5.2.1.2.2.3.2.5l-.3 22.1.3 21.3c0 .2-.1.3-.2.5-.1.1-.3.2-.5.2h-4.7c-.2 0-.3-.1-.5-.2-.1-.2-.2-.3-.2-.5l.1-16.8.1-13.7.1-5.8L25 98.8c0 .2-.2.3-.4.4-.2.1-.4.2-.6.2h-3.4c-.2 0-.4-.1-.6-.2-.2-.1-.3-.3-.4-.4L5.4 61.9l.1 6.5.2 13.5zM56.1 81.8l.1 16.8c0 .2-.1.3-.2.5-.2.1-.3.2-.5.2h-4.2c-.2 0-.3-.1-.5-.2-.1-.2-.2-.3-.2-.5l.3-21.3-.3-22.1c0-.2.1-.3.2-.5.1-.1.3-.2.5-.2H58c.2 0 .4.1.6.2.2.1.3.3.4.4l14.2 36.6L87 55c0-.2.2-.3.4-.4.2-.1.4-.2.6-.2h6.3c.2 0 .3.1.5.2.1.2.2.3.2.5l-.3 22.1.3 21.4c0 .2-.1.3-.2.5-.1.1-.3.2-.5.2h-4.7c-.2 0-.3-.1-.5-.2-.1-.2-.2-.3-.2-.5l.1-16.8.1-13.7.1-5.8-13.8 36.3c0 .2-.2.3-.4.4-.2.1-.4.2-.6.2H71c-.2 0-.4-.1-.6-.2-.2-.1-.3-.3-.4-.4L55.8 61.8l.1 6.5.2 13.5zM154.6 80.9l.1 18c0 .2-.1.3-.2.5-.2.1-.3.2-.5.2h-4.4c-.2 0-.3-.1-.5-.2s-.2-.3-.2-.5l.3-22.1-.3-21.4c0-.2.1-.3.2-.5s.3-.2.5-.2h5.6c.2 0 .4.1.6.2.2.1.4.2.5.4l23.4 36.6-.1-3.9-.1-14.1-.1-18.5c0-.2.1-.3.2-.5s.3-.2.5-.2h4.4c.2 0 .3.1.5.2.1.1.2.3.2.5l-.2 21.4.3 22.1c0 .2-.1.3-.2.5-.1.1-.3.2-.5.2h-5.9c-.2 0-.4-.1-.6-.2-.2-.1-.4-.2-.5-.4l-23.1-36.1.1 4.8v13.2z"/><path class="top-o" d="M107 39.4c0 2.8.4 5.4 1.1 7.6.7 2.3 1.7 4.2 3.1 5.8 1.3 1.5 2.9 2.7 4.8 3.6 1.9.8 4 1.3 6.4 1.3 2.4 0 4.5-.4 6.4-1.3 1.9-.8 3.5-2 4.8-3.6 1.3-1.6 2.3-3.5 3-5.8.7-2.3 1-4.8 1-7.7 0-2.8-.3-5.4-1-7.7s-1.7-4.2-3-5.8c-1.3-1.6-2.9-2.8-4.8-3.6-1.9-.9-4.1-1.3-6.5-1.3-2.4 0-4.5.4-6.4 1.2-1.9.8-3.5 2-4.8 3.6-1.3 1.6-2.3 3.5-3 5.8-.8 2.4-1.1 5-1.1 7.9zm36.7-.1c0 3.5-.5 6.7-1.5 9.6-1 2.9-2.5 5.3-4.3 7.3-1.9 2-4.2 3.6-6.8 4.7-2.7 1.1-5.6 1.7-8.8 1.7-3.2 0-6.1-.6-8.8-1.7-2.6-1.1-4.9-2.7-6.8-4.7-1.9-2-3.3-4.4-4.3-7.3-1-2.9-1.5-6-1.5-9.5 0-3.6.5-6.8 1.5-9.7 1-2.9 2.5-5.3 4.3-7.3 1.9-2 4.1-3.6 6.8-4.7 2.6-1.1 5.6-1.6 8.8-1.6 3.3 0 6.2.5 8.8 1.6 2.6 1.1 4.9 2.6 6.8 4.6 1.9 2 3.3 4.4 4.3 7.3.9 2.9 1.4 6.1 1.5 9.7z"/><path class="bottom-o" d="M107 63.5c0 2.8.4 5.4 1.1 7.6.7 2.3 1.7 4.2 3.1 5.8 1.3 1.5 2.9 2.7 4.8 3.6 1.9.8 4 1.3 6.4 1.3 2.4 0 4.5-.4 6.4-1.3 1.9-.8 3.5-2 4.8-3.6 1.3-1.6 2.3-3.5 3-5.8.7-2.3 1-4.8 1-7.7 0-2.8-.3-5.4-1-7.7s-1.7-4.2-3-5.8c-1.3-1.6-2.9-2.8-4.8-3.6-1.9-.9-4.1-1.3-6.5-1.3-2.4 0-4.5.4-6.4 1.2-1.9.8-3.5 2-4.8 3.6-1.3 1.6-2.3 3.5-3 5.8-.8 2.4-1.1 5-1.1 7.9zm36.7-.1c0 3.5-.5 6.7-1.5 9.6-1 2.9-2.5 5.3-4.3 7.3-1.9 2-4.2 3.6-6.8 4.7-2.7 1.1-5.6 1.7-8.8 1.7-3.2 0-6.1-.6-8.8-1.7-2.6-1.1-4.9-2.7-6.8-4.7-1.9-2-3.3-4.4-4.3-7.3-1-2.9-1.5-6-1.5-9.5 0-3.6.5-6.8 1.5-9.7 1-2.9 2.5-5.3 4.3-7.3 1.9-2 4.1-3.6 6.8-4.7 2.6-1.1 5.6-1.6 8.8-1.6 3.3 0 6.2.5 8.8 1.6 2.6 1.1 4.9 2.6 6.8 4.6 1.9 2 3.3 4.4 4.3 7.3.9 2.9 1.4 6.1 1.5 9.7z"/></svg>
          <Link to="/about">
            <div
              style={{
                position: 'absolute',
                top: Math.random() * 400,
                left: Math.random() * 1000,
              }}
            >
              <img src={'/about-circle.svg'} alt="About" />
            </div>
          </Link>
        </div>
        <div className="block-text-home">
          <div>
            INCOMMON. In praise of community. Shared creativity in arts and
            politics in Italy (1959-1979) is a research project funded by the
            European Research Council (ERC Starting Grant 2015) and hosted by
            IUAV, University of Venice.  INCOMMON is meant to be the first study to systematically analyse
                the field of performing arts as resulting from the practice of
                commonality both theorized and experienced over the 1960s and the
                1970s. In particular, the project is aimed to study the history of
                the ‘laboratory Italy’ as the place where artistic counterculture
                expressed by performing arts arose in a milieu characterized by a
                profound relation between philosophy, politics, and revolutionary
                practices.
            </div>
    {    /*  <div style={{ marginTop: 40 }}>
            {' '}
            INCOMMON is meant to be the first study to systematically analyse
            the field of performing arts as resulting from the practice of
            commonality both theorized and experienced over the 1960s and the
            1970s. In particular, the project is aimed to study the history of
            the ‘laboratory Italy’ as the place where artistic counterculture
            expressed by performing arts arose in a milieu characterized by a
            profound relation between philosophy, politics, and revolutionary
            practices.
          </div> */}
        </div>
      </div>
      <div onClick={() => setVideo(!video)} className="TopHome pointer">
        <img
          className="img-fluid"
          src="/incommon-video-home-thumbnail.png"
          alt="Video"
        />
      </div>
      <div className="HomePages">
        <div
          className={classNames({
            'page-home': menuOpen !== ARCHIVIO,
            'page-home-open': menuOpen === ARCHIVIO,
          })}
          onClick={() =>
            menuOpen !== ARCHIVIO ? setMenuOpen(ARCHIVIO) : setMenuOpen(null)
          }
        >
          <div className="text-page-home">
            <div className="title-page-home">Performance Remains</div>
            {menuOpen === ARCHIVIO && (
              <>
                <div className="description-page-home">
                  Like documents spread on a table, this view traces paths that
                  jump from one performance to another, connecting materials
                  across time and space.
                </div>
                <div className="d-flex align-items-center esplora-link">
                  <Link className="esplora-home mt-1" to={ARCHIVIO}>
                    <span>EXPLORE</span>
                  </Link>
                  {/*  <img className="ml-3" src="/home-arrow.svg" alt="Explore" /> */}
                </div>
              </>
            )}
          </div>
          <div
            className="image-block"
            style={{ backgroundImage: "url('/performance-remains.png')" }}
          >
            {/* <img src="/performance-remains.png" alt="Performance Remains" /> */}
          </div>
        </div>
        <div
          className={classNames({
            'page-home': menuOpen !== SPETTACOLO,
            'page-home-open': menuOpen === SPETTACOLO,
          })}
          onClick={() =>
            menuOpen !== SPETTACOLO
              ? setMenuOpen(SPETTACOLO)
              : setMenuOpen(null)
          }
        >
          <div className="text-page-home">
            <div className="title-page-home">Recomposition</div>
            {menuOpen === SPETTACOLO && (
              <>
                <div className="description-page-home">
                  This view plays on the layering of materials as a generative
                  technique. Documents, treated as raw footage, generate
                  unexpected visions of the performances.
                </div>
                <div className="d-flex align-items-center esplora-link">
                  <Link className="esplora-home mt-1" to={SPETTACOLO}>
                    <span>EXPLORE</span>
                  </Link>
                  {/*  <img className="ml-3" src="/home-arrow.svg" alt="Explore" /> */}
                </div>
              </>
            )}
          </div>
          <div
            className="image-block"
            style={{ backgroundImage: "url('/recomposition.png')" }}
          >
            {/* <img src="/recomposition.png" alt="Recomposition" /> */}
          </div>
        </div>
        <div
          className={classNames({
            'page-home': menuOpen !== FORMA,
            'page-home-open': menuOpen === FORMA,
          })}
          onClick={() =>
            menuOpen !== FORMA ? setMenuOpen(FORMA) : setMenuOpen(null)
          }
        >
          <div className="text-page-home">
            <div className="title-page-home">The Shape of Community</div>
            {menuOpen === FORMA && (
              <>
                <div className="description-page-home">
                  This view shows the network of relations between people and
                  events characterizing the Incommon community.
                </div>
                <div className="d-flex align-items-center esplora-link">
                  <Link className="esplora-home mt-1" to={FORMA}>
                    <span>EXPLORE</span>
                  </Link>
                  {/*  <img className="ml-3" src="/home-arrow.svg" alt="Explore" /> */}
                </div>
              </>
            )}
          </div>
          <div
            className="image-block"
            style={{ backgroundImage: "url('/the-shape-of-community.png')" }}
          >
            {/* <img
              src="/the-shape-of-community.png"
              alt="The Shape of Community"
            /> */}
          </div>
        </div>
        <div
          className={classNames({
            'page-home': menuOpen !== LUOGHI,
            'page-home-open': menuOpen === LUOGHI,
          })}
          onClick={() =>
            menuOpen !== LUOGHI ? setMenuOpen(LUOGHI) : setMenuOpen(null)
          }
        >
          <div className="text-page-home">
            <div className="title-page-home">Times and Places</div>
            {menuOpen === LUOGHI && (
              <>
                <div className="description-page-home">
                  This view illustrates the geographical and temporal extent of
                  the community. The visualization displays the locations of
                  Incommon from 1959 to 1979.
                </div>
                <div className="d-flex align-items-center esplora-link">
                  <Link className="esplora-home mt-1" to={LUOGHI}>
                    <span>EXPLORE</span>
                  </Link>
                    {/*  <img className="ml-3" src="/home-arrow.svg" alt="Explore" /> */}
                </div>
              </>
            )}
          </div>
          <div
            className="image-block"
            style={{ backgroundImage: "url('/times-and-places.png')" }}
          >
            {/* <img src="/times-and-places.png" alt="Times and Places" /> */}
          </div>
        </div>
        <div
          className={classNames('last-item-menu', {
            'page-home': menuOpen !== CATALOGO,
            'page-home-open': menuOpen === CATALOGO,
          })}
          onClick={() =>
            menuOpen !== CATALOGO ? setMenuOpen(CATALOGO) : setMenuOpen(null)
          }
        >
          <div className="text-page-home">
            <div className="title-page-home">Catalogue</div>
            {menuOpen === CATALOGO && (
              <>
                <div className="description-page-home">
                  This view maintains the traditional conception of materials as
                  documents. The filters offer means to stimulate new readings
                  of documents as collections.
                </div>
                <div className="d-flex align-items-center esplora-link">
                  <Link className="esplora-home mt-1" to={CATALOGO}>
                    <span>EXPLORE</span>
                  </Link>
                    {/*  <img className="ml-3" src="/home-arrow.svg" alt="Explore" /> */}
                </div>
              </>
            )}
          </div>
          <div
            className="image-block"
            style={{ backgroundImage: "url('/catalogue.png')" }}
          >
            {/* <img src="/catalogue.png" alt="Catalogue" /> */}
          </div>
        </div>
        <Footer />
        <Modal
          centered
          size="lg"
          isOpen={video}
          toggle={() => setVideo(!video)}
        >
          <ModalBody>
            {/* <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/Rnh_buYU4Qw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe> */}
          </ModalBody>
        </Modal>
      </div>
    </div>
  )
}
