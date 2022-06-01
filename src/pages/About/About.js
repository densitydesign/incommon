import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import './About.css'

export default function About() {
  const firstORef = useRef()
  const secondORef = useRef()

  useEffect(() => {
    setTimeout(() => {
      if (firstORef.current) {
        firstORef.current.style.transform = 'translateY(0)'
        firstORef.current.style.animation =
          '1.2s cubic-bezier(0.86, 0, 0.07, 1) 1s 1 forwards'
      }
      if (secondORef.current) {
        secondORef.current.style.transform = 'translateY(0)'
      }
    }, 1000)
  })
  return (
    <div className="About">
      <Link to="/">
        <div className="logoAbout">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290.7 104.3"><path d="M152.9 18.3c.8 1.1 1.8 1.6 3.2 1.6 1.5 0 2.6-.6 3.4-1.7.7-1.1 1.1-2.5 1.1-4.3 0-1.9-.4-3.4-1.1-4.5-.7-1.2-1.8-1.7-3.3-1.7-1.3 0-2.4.5-3.2 1.5-.8 1-1.2 2.5-1.2 4.4 0 2.1.3 3.6 1.1 4.7m10-1.3c-.3 1-.7 1.9-1.3 2.6-.5.7-1.2 1.3-2 1.7-.8.4-1.7.6-2.8.6-1.1 0-2.1-.2-2.9-.7-.8-.4-1.5-1.1-2-2l.1 7.2c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-11.6-.1-8.5c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 2.2c.5-.9 1.2-1.6 2-2.1s1.8-.8 2.9-.8c1.1 0 2 .2 2.8.6.8.4 1.5 1 2 1.7s.9 1.6 1.2 2.6c.3 1 .4 2.1.4 3.2.2 1.2.1 2.3-.2 3.3M175.6 9.1c-.7-.9-1.8-1.4-3.2-1.4-1.3 0-2.3.4-3 1.2-.7.8-1.2 1.9-1.4 3.4h8.7c0-1.3-.4-2.3-1.1-3.2m3.5 7.1c.1 0 .2 0 .2.1.1.1.1.1.1.2-.2 1.6-.9 2.9-2.1 3.9-1.2 1-2.7 1.5-4.7 1.5-1.2 0-2.3-.2-3.2-.6-.9-.4-1.7-1-2.3-1.7-.6-.7-1.1-1.6-1.4-2.6-.3-1-.5-2.1-.5-3.3 0-1.2.2-2.3.5-3.3s.8-1.9 1.5-2.6c.6-.7 1.4-1.3 2.3-1.7.9-.4 1.9-.6 3-.6 2.2 0 4 .7 5.3 2.2 1.3 1.5 1.9 3.5 2 6 0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-11.4c0 1.9.5 3.3 1.2 4.3.8 1 1.9 1.5 3.5 1.5 1.1 0 2-.3 2.7-.9.7-.6 1.2-1.4 1.4-2.5 0-.1.1-.2.2-.2.1-.1.2-.1.2-.1h1.8zM182.1 21.7c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-7.6-.1-7.3c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2V9c.6-1 1.3-1.8 2.3-2.3.9-.5 2-.8 3-.8h.4c.2 0 .3 0 .4.1.1 0 .2.1.2.1.1.1.1.1.1.2v1.6c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-.9c-1.3 0-2.4.4-3.4 1.2-1 .8-1.6 2-1.8 3.7l.1 8.2c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2zM197 14.6l.1 6.7c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-6.7V8.2h-2.1c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2V6.4c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1V4.7c0-.8.1-1.6.4-2.2.2-.6.6-1.1.9-1.4.4-.4.8-.6 1.3-.8.5-.2 1-.2 1.5-.2.3 0 .7 0 1 .1.4 0 .7.1.9.2.1 0 .2.1.2.2.1.1.1.2.1.2v1.4c0 .1 0 .1-.1.2-.1 0-.1.1-.2 0-.2 0-.4-.1-.6-.1h-.7c-.6 0-1.1.2-1.5.6-.4.4-.5 1.1-.5 2.1v1h3.3c.1 0 .2 0 .2.1.1.1.1.1.1.2v1.5c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1H197v6.5zM204.7 18.4c.8 1.1 1.9 1.6 3.4 1.6s2.7-.5 3.4-1.6c.8-1.1 1.1-2.6 1.1-4.5s-.4-3.5-1.1-4.5c-.8-1.1-1.9-1.6-3.4-1.6s-2.7.6-3.4 1.7c-.8 1.1-1.2 2.6-1.2 4.5.1 1.8.4 3.3 1.2 4.4m8.9 1.4c-1.3 1.5-3.1 2.3-5.5 2.3-2.3 0-4.2-.7-5.5-2.2-1.3-1.5-1.9-3.5-1.9-5.9 0-2.5.6-4.5 1.9-6 1.3-1.5 3.1-2.3 5.5-2.3s4.2.7 5.5 2.2c1.3 1.5 1.9 3.5 1.9 5.9 0 2.5-.6 4.5-1.9 6M217.8 21.7c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-7.6-.1-7.3c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 2.5c.6-1 1.3-1.8 2.3-2.3.9-.5 2-.8 3-.8h.4c.2 0 .3 0 .4.1.1 0 .2.1.2.1.1.1.1.1.1.2v1.6c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-.9c-1.3 0-2.4.4-3.4 1.2-1 .8-1.6 2-1.8 3.7l.1 8.2c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.1zM230.8 15.6l.1 5.8c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-5.8-.2-9.2c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 2.3c.5-.8 1.1-1.5 1.9-2.1.8-.6 1.8-.9 2.9-.9 1.1 0 2.1.3 2.8.8.8.5 1.3 1.4 1.7 2.5.6-1.1 1.3-1.9 2.1-2.5.8-.6 1.8-.8 2.9-.8 1.5 0 2.7.5 3.6 1.5.9 1 1.3 2.6 1.3 4.7v3.7l.1 5.8c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-5.8V12c0-1.5-.3-2.5-.8-3.1-.5-.6-1.3-1-2.2-1-.8 0-1.6.4-2.3 1.1-.7.7-1.2 1.7-1.5 3v3.6l.1 5.8c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1H238c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-5.8V12c0-1.5-.3-2.5-.8-3.1-.5-.6-1.3-1-2.2-1-.9 0-1.7.4-2.4 1.2-.7.8-1.2 2-1.5 3.5v3zM252.8 4.1c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2V1.4c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.2c.1 0 .2 0 .2.1.1.1.1.1.1.2v2.3c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2zm-.1 17.6c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-7.7-.1-7.2c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.2c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 7.2.1 7.7c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2zM258.3 21.7c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-6.8-.1-8.2c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 2.3c.5-.8 1.2-1.5 2-2.1.9-.6 1.9-.9 3.2-.9 1.6 0 2.9.5 3.8 1.6.9 1.1 1.4 2.6 1.4 4.6V15l.1 6.3c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.1c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-6.3v-3c0-1.4-.3-2.4-.9-3.1-.6-.7-1.4-1-2.4-1s-1.9.4-2.7 1.2c-.8.8-1.3 2-1.6 3.5v8.7c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2zM276.9 18.1c.8 1 1.9 1.5 3.4 1.5 1.3 0 2.3-.5 3.1-1.4.8-.9 1.2-2.4 1.2-4.3 0-1.8-.3-3.3-1-4.3-.7-1.1-1.6-1.7-2.9-1.8h-.8c-1.4.1-2.4.7-3.1 1.7-.7 1.1-1 2.5-1 4.2-.1 1.9.3 3.3 1.1 4.4m8.4 7.7c-1.2 1.2-2.9 1.8-5.2 1.8-.9 0-1.7-.1-2.5-.3-.8-.2-1.5-.5-2.1-.9-.6-.4-1.1-.9-1.5-1.5-.4-.6-.6-1.3-.7-2.2 0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2c.1 0 .2 0 .3.1.1.1.1.1.1.2.1.9.6 1.6 1.3 2.1.7.4 1.6.7 2.7.7 1.3 0 2.4-.4 3.1-1.2s1.1-2.1 1.1-3.8v-1.7c-.5.9-1.2 1.5-2 2s-1.8.7-2.9.7c-1.1 0-2.1-.2-2.9-.6-.8-.4-1.5-.9-2.1-1.6-.6-.7-1-1.5-1.3-2.5-.3-1-.4-2-.4-3.1s.1-2.1.4-3.1c.3-1 .7-1.8 1.3-2.5s1.2-1.3 2.1-1.7c.8-.4 1.7-.6 2.8-.6 1.1 0 2.1.2 2.9.7.8.5 1.5 1.1 2 2l-.1-2.1c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 5.9.1 8.3c.4 2.2-.2 3.9-1.4 5.2M156.3 44.1c.7 1.2 1.8 1.7 3.3 1.7 1.3 0 2.4-.5 3.2-1.5.8-1 1.2-2.5 1.2-4.4 0-1.8-.3-3.3-1-4.4-.7-1.1-1.6-1.7-2.8-1.8h-.8c-1.4.1-2.4.7-3.1 1.7-.7 1.1-1 2.5-1 4.2-.1 1.9.3 3.4 1 4.5m7.9 3.5c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-2.2c-.5.9-1.2 1.6-2 2.1s-1.8.8-2.9.8c-1.1 0-2-.2-2.8-.6-.8-.4-1.5-1-2-1.7s-.9-1.6-1.2-2.6c-.3-1-.4-2-.4-3.2 0-1.1.1-2.2.4-3.2.3-1 .7-1.9 1.3-2.6.5-.7 1.2-1.3 2-1.7.8-.4 1.7-.6 2.8-.6 1.1 0 2.1.2 2.9.7.8.5 1.5 1.1 2 2l-.1-2.1c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 7.3.1 7.6c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2zM169.5 47.6c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-7.6-.1-7.3c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 2.6c.6-1 1.3-1.8 2.3-2.3.9-.5 2-.8 3-.8h.4c.2 0 .3 0 .4.1.1 0 .2.1.2.1.1.1.1.1.1.2v1.6c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-.9c-1.3 0-2.4.4-3.4 1.2-1 .8-1.6 2-1.8 3.7l.1 8.2c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.1zM187.9 47.1c0 .1 0 .2-.1.3l-.2.2c-.3.1-.6.2-1 .2-.4.1-.7.1-1 .1-1.1 0-2.1-.3-3-1-.8-.7-1.3-1.9-1.3-3.6v-9.2h-1.7c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2v-1.5c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h1.7l-.1-3.6c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.2c.1 0 .2 0 .2.1.1.1.1.1.1.2V32h3.5c.1 0 .2 0 .2.1.1.1.1.1.1.2v1.5c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1H184v9.1c0 .9.2 1.6.5 1.9.3.4.8.5 1.5.5h.8c.3 0 .5-.1.7-.1h.2c.1.1.1.1.1.2v1.4zM202 45.1c-.3.6-.8 1.1-1.4 1.5-.6.4-1.3.7-2 .9-.8.2-1.6.3-2.5.3-2 0-3.7-.5-5-1.3-1.3-.9-2-2.3-2.1-4.1 0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2c.1 0 .2 0 .2.1.1.1.1.1.1.2.1 1.2.5 2.1 1.2 2.7.7.6 1.8.8 3.2.8 1.2 0 2.1-.2 2.8-.7.7-.5 1-1.1 1-2 0-1-.6-1.7-1.7-1.9-1.1-.3-2.3-.5-3.6-.8-1.3-.2-2.5-.6-3.6-1.2s-1.7-1.6-1.7-3.2c0-1.5.6-2.6 1.7-3.4 1.1-.8 2.6-1.2 4.5-1.2 1.8 0 3.3.4 4.5 1.2 1.2.8 1.9 2 2 3.5 0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-1.9c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2-.1-1-.5-1.7-1.2-2.1-.7-.5-1.6-.7-2.7-.7s-1.9.2-2.5.6c-.6.4-1 1-1 1.9 0 1 .6 1.6 1.7 1.8 1.1.2 2.3.5 3.6.7 1.3.2 2.5.6 3.6 1.2s1.7 1.7 1.7 3.3c-.1 1-.3 1.6-.6 2.2M210 30c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2v-2.3c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.2c.1 0 .2 0 .2.1.1.1.1.1.1.2v2.3c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1H210zm-.1 17.6c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-7.7-.1-7.2c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.2c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 7.2.1 7.7c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2zM215.5 47.6c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-6.8-.1-8.2c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 2.3c.5-.8 1.2-1.5 2-2.1.9-.6 1.9-.9 3.2-.9 1.6 0 2.9.5 3.8 1.6.9 1.1 1.4 2.6 1.4 4.6v3.1l.1 6.3c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.1c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-6.3v-3c0-1.4-.3-2.4-.9-3.1-.6-.7-1.4-1-2.4-1s-1.9.4-2.7 1.2c-.8.8-1.3 2-1.6 3.5v8.7c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2zM236.5 47.6c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.2-10.5-.2-10.1c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.2c.1 0 .2 0 .2.1.1.1.1.1.1.2v10.1l.2 10.5c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.4zM250.4 47.1c0 .1 0 .2-.1.3l-.2.2c-.3.1-.6.2-1 .2-.4.1-.7.1-1 .1-1.1 0-2.1-.3-3-1-.8-.7-1.3-1.9-1.3-3.6v-9.2h-1.7c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2v-1.5c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h1.7l-.1-3.6c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.2c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 3.6h3.5c.1 0 .2 0 .2.1.1.1.1.1.1.2v1.5c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-3.5v9.1c0 .9.2 1.6.5 1.9.3.4.8.5 1.5.5h.8c.3 0 .5-.1.7-.1h.2c.1.1.1.1.1.2v1.4zM255.5 44.1c.7 1.2 1.8 1.7 3.3 1.7 1.3 0 2.4-.5 3.2-1.5.8-1 1.2-2.5 1.2-4.4 0-1.8-.3-3.3-1-4.4-.7-1.1-1.6-1.7-2.8-1.8h-.8c-1.4.1-2.4.7-3.1 1.7-.7 1.1-1 2.5-1 4.2-.1 1.9.2 3.4 1 4.5m7.8 3.5c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2V45c-.5.9-1.2 1.6-2 2.1s-1.8.8-2.9.8c-1.1 0-2-.2-2.8-.6-.8-.4-1.5-1-2-1.7s-.9-1.6-1.2-2.6-.4-2-.4-3.2c0-1.1.1-2.2.4-3.2.3-1 .7-1.9 1.3-2.6.5-.7 1.2-1.3 2-1.7.8-.4 1.7-.6 2.8-.6 1.1 0 2.1.2 2.9.7.9.5 1.5 1.1 2 2l-.1-2.1c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 7.3.1 7.6c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.1zM269.8 47.6c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-10.4-.1-10.2c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 10.1.1 10.4c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.1zM281.7 52.4c0 .1-.1.2-.2.2-.1.1-.2.1-.3.1h-1.9c-.1 0-.1 0-.2-.1 0-.1-.1-.1 0-.2l1.6-4.9-6.1-15.3V32c0-.1.1-.1.2-.1h2.4c.1 0 .2 0 .3.1.1.1.2.1.2.2l4.4 11.7 3.8-11.7c0-.1.1-.2.2-.2.1-.1.2-.1.3-.1h2.2c.1 0 .1 0 .2.1 0 .1.1.1 0 .2l-7.1 20.2zM205.7 73.5c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-10.2-.1-7.4c-.6.5-1.2 1-2 1.4-.7.4-1.5.7-2.3 1h-.2c-.1-.1-.1-.1-.1-.2v-1.7c0-.1 0-.2.1-.3.1-.1.1-.2.2-.2.9-.3 1.7-.8 2.4-1.3s1.3-1.1 1.8-1.8l.2-.2c.1 0 .2-.1.3-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.2 10.9.2 9.6c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-2.2zM215.5 62.9c.7.9 1.7 1.4 3.1 1.4s2.5-.4 3.2-1.3c.8-.9 1.2-2 1.2-3.6 0-1.5-.4-2.8-1.1-3.8-.8-1-1.8-1.5-3.2-1.5-1.4 0-2.4.5-3.2 1.4-.8.9-1.1 2.2-1.1 3.8.1 1.5.4 2.7 1.1 3.6m8.6 8.1c-1.4 1.9-3.3 2.9-5.7 2.9-1.8 0-3.2-.4-4.2-1.3s-1.7-2.2-1.9-3.8c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2.1.9.5 1.7 1.1 2.2.6.5 1.4.8 2.4.8 1.5 0 2.7-.7 3.5-2.1.8-1.4 1.2-3.3 1.2-5.7-.5.8-1.2 1.4-2.1 1.9-.9.4-1.9.7-3.1.7-2 0-3.6-.6-4.8-1.9-1.2-1.2-1.8-2.9-1.8-5 0-1.1.2-2.1.5-3.1.4-1 .9-1.8 1.5-2.5s1.4-1.2 2.3-1.6c.9-.4 1.8-.6 2.9-.6 2.3 0 4.2.9 5.5 2.7 1.3 1.8 2 4.5 2 8.2.1 3.5-.6 6.2-2 8.2M240 71.7c-1.4 1.5-3.2 2.2-5.4 2.2-2.1 0-3.8-.5-4.9-1.6-1.1-1.1-1.8-2.5-2-4.3 0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.2c.1 0 .2 0 .2.1.1.1.1.1.1.2.1 1.1.5 2 1.2 2.7.7.7 1.7 1 2.9 1 1.4 0 2.4-.5 3.2-1.5.8-1 1.2-2.4 1.2-4.3 0-1.8-.4-3.1-1.1-4s-1.8-1.4-3.2-1.4c-1.1 0-1.9.3-2.6.8-.7.5-1.1 1.3-1.4 2.2 0 .1-.1.2-.2.2-.1.1-.2.1-.3.1h-1.8c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.7-10.9c0-.1.1-.2.1-.2.1-.1.1-.1.2-.1h11.1c.1 0 .2 0 .2.1.1.1.1.1.1.2v1.6c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-9l-.5 5.7c.6-.7 1.2-1.2 2-1.5.8-.3 1.7-.5 2.6-.5.9 0 1.8.2 2.6.5s1.5.8 2.1 1.5c.6.6 1 1.4 1.4 2.3.3.9.5 2 .5 3.1.2 2.7-.5 4.6-1.9 6.1M247.2 62.9c.7.9 1.7 1.4 3.1 1.4s2.5-.4 3.2-1.3c.8-.9 1.2-2 1.2-3.6 0-1.5-.4-2.8-1.1-3.8-.8-1-1.8-1.5-3.2-1.5-1.4 0-2.4.5-3.2 1.4-.8.9-1.1 2.2-1.1 3.8.1 1.5.4 2.7 1.1 3.6m8.6 8.1c-1.4 1.9-3.3 2.9-5.7 2.9-1.8 0-3.2-.4-4.2-1.3s-1.7-2.2-1.9-3.8c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2.1.9.5 1.7 1.1 2.2.6.5 1.4.8 2.4.8 1.5 0 2.7-.7 3.5-2.1.8-1.4 1.2-3.3 1.2-5.7-.5.8-1.2 1.4-2.1 1.9-.9.4-1.9.7-3.1.7-2 0-3.6-.6-4.8-1.9-1.2-1.2-1.8-2.9-1.8-5 0-1.1.2-2.1.5-3.1.4-1 .9-1.8 1.5-2.5s1.4-1.2 2.3-1.6c.9-.4 1.8-.6 2.9-.6 2.3 0 4.2.9 5.5 2.7 1.3 1.8 2 4.5 2 8.2.1 3.5-.6 6.2-2 8.2M272.7 73c0 .1 0 .2-.1.3l-.2.2c-.3.1-.6.2-1 .2-.4.1-.7.1-1 .1-1.1 0-2.1-.3-3-1-.8-.7-1.3-1.9-1.3-3.6V60h-1.7c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2v-1.5c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h1.7l-.1-3.6c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.2c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.1 3.6h3.5c.1 0 .2 0 .2.1.1.1.1.1.1.2v1.5c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1h-3.5v9.1c0 .9.2 1.6.5 1.9.3.4.8.5 1.5.5h.8c.3 0 .5-.1.7-.1h.2c.1 0 .1.1.1.2V73zM277 70.2c.8 1.1 1.9 1.6 3.4 1.6s2.7-.5 3.4-1.6c.8-1.1 1.1-2.6 1.1-4.5s-.4-3.5-1.1-4.6c-.8-1.1-1.9-1.6-3.4-1.6s-2.7.6-3.4 1.7c-.8 1.1-1.2 2.6-1.2 4.5.1 2 .5 3.5 1.2 4.5m9 1.4c-1.3 1.5-3.1 2.3-5.5 2.3-2.3 0-4.2-.7-5.5-2.2-1.3-1.5-1.9-3.5-1.9-5.9 0-2.5.6-4.5 1.9-6 1.3-1.5 3.1-2.3 5.5-2.3s4.2.7 5.5 2.2c1.3 1.5 1.9 3.5 1.9 5.9 0 2.5-.7 4.5-1.9 6M239 99.4c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2l.1-10.2-.1-7.4c-.6.5-1.2 1-2 1.4-.7.4-1.5.7-2.3 1h-.2c-.1-.1-.1-.1-.1-.2V82c0-.1 0-.2.1-.3.1-.1.1-.2.2-.2.9-.3 1.7-.8 2.4-1.3s1.3-1.1 1.8-1.8l.2-.2c.1-.1.2-.1.3-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2l-.2 10.9.2 9.6c0 .1 0 .2-.1.2-.1.1-.1.1-.2.1H239zM248.8 88.8c.7.9 1.8 1.4 3.1 1.4 1.4 0 2.5-.4 3.2-1.3.8-.9 1.2-2 1.2-3.6 0-1.5-.4-2.8-1.1-3.8-.8-1-1.8-1.5-3.2-1.5-1.4 0-2.4.5-3.2 1.4-.8.9-1.1 2.2-1.1 3.8 0 1.5.4 2.7 1.1 3.6m8.5 8.1c-1.4 1.9-3.3 2.9-5.7 2.9-1.8 0-3.2-.4-4.2-1.3s-1.7-2.2-1.9-3.8c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2.1.9.5 1.7 1.1 2.2.6.5 1.4.8 2.4.8 1.5 0 2.7-.7 3.5-2.1.8-1.4 1.2-3.3 1.2-5.7-.5.8-1.2 1.4-2.1 1.9-.9.4-1.9.7-3.1.7-2 0-3.6-.6-4.8-1.9-1.2-1.2-1.8-2.9-1.8-5 0-1.1.2-2.1.5-3.1.4-1 .9-1.8 1.5-2.5s1.4-1.2 2.3-1.6c.9-.4 1.8-.6 2.9-.6 2.3 0 4.2.9 5.5 2.7 1.3 1.8 2 4.5 2 8.2.2 3.5-.5 6.3-2 8.2M268.6 89.5c-1.1 3.1-1.9 6.3-2.4 9.6 0 .1-.1.2-.2.2-.1.1-.2.1-.2.1h-2.3c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2.3-1.7.6-3.3 1-5 .4-1.7.8-3.3 1.4-4.8.5-1.6 1.1-3.1 1.7-4.6.6-1.5 1.3-2.9 2.1-4.2H260c-.1 0-.2 0-.2-.1-.1-.1-.1-.1-.1-.2v-1.6c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h12.1c.1 0 .2 0 .2.1.1.1.1.1.1.2V80.5c0 .1-.1.2-.1.3-1.4 2.7-2.6 5.6-3.7 8.7M276.8 88.8c.7.9 1.8 1.4 3.1 1.4 1.4 0 2.5-.4 3.2-1.3.8-.9 1.2-2 1.2-3.6 0-1.5-.4-2.8-1.1-3.8-.8-1-1.8-1.5-3.2-1.5-1.4 0-2.4.5-3.2 1.4-.8.9-1.1 2.2-1.1 3.8 0 1.5.4 2.7 1.1 3.6m8.5 8.1c-1.4 1.9-3.3 2.9-5.7 2.9-1.8 0-3.2-.4-4.2-1.3s-1.7-2.2-1.9-3.8c0-.1 0-.2.1-.2.1-.1.1-.1.2-.1h2.1c.1 0 .2 0 .2.1.1.1.1.1.1.2.1.9.5 1.7 1.1 2.2.6.5 1.4.8 2.4.8 1.5 0 2.7-.7 3.5-2.1.8-1.4 1.2-3.3 1.2-5.7-.5.8-1.2 1.4-2.1 1.9-.9.4-1.9.7-3.1.7-2 0-3.6-.6-4.8-1.9-1.2-1.2-1.8-2.9-1.8-5 0-1.1.2-2.1.5-3.1.4-1 .8-1.8 1.5-2.5.6-.7 1.4-1.2 2.3-1.6.9-.4 1.8-.6 2.9-.6 2.3 0 4.2.9 5.5 2.7 1.3 1.8 2 4.5 2 8.2.1 3.5-.6 6.3-2 8.2M.7 50.7c-.2 0-.3-.1-.5-.2-.1-.2-.2-.4-.2-.5l.3-22.1L0 6.5c0-.2.1-.3.2-.5s.3-.2.5-.2h4.7c.2 0 .3.1.5.2.1.1.2.3.2.5l-.3 21.4.4 22.1c0 .2-.1.3-.2.5-.2.1-.3.2-.5.2H.7zM18.7 32l.1 18c0 .2-.1.3-.2.5-.2.1-.3.2-.5.2h-4.4c-.2 0-.3-.1-.5-.2-.1-.1-.2-.3-.2-.5l.3-22-.4-21.5c0-.2.1-.3.2-.5.1-.1.3-.2.5-.2h5.6c.2 0 .4.1.6.2.2.1.4.2.5.4L43.8 43l-.1-3.9-.1-14.1-.1-18.5c0-.2.1-.3.2-.5.1-.1.3-.2.5-.2h4.4c.2 0 .3.1.5.2.1.2.2.3.2.5L49 27.9l.3 22c0 .2-.1.3-.2.5-.1.1-.3.2-.5.2h-5.9c-.2 0-.4-.1-.6-.2-.2-.1-.4-.2-.5-.4L18.4 14l.1 4.8.2 13.2zM87.8 47.4c-3.4 2.7-7.6 4.1-12.7 4.1-6.5 0-11.7-2.1-15.4-6.2-3.7-4.2-5.6-9.9-5.6-17.1 0-3.5.5-6.7 1.5-9.6 1-2.9 2.4-5.3 4.2-7.3 1.8-2 4-3.6 6.6-4.6C69 5.5 71.9 5 75.1 5c2.2 0 4.3.3 6.4.8 2 .5 3.9 1.4 5.5 2.7 1.6 1.2 3 2.9 4.2 4.8 1.2 2 2 4.4 2.6 7.3 0 .2 0 .3-.1.5s-.3.2-.4.2h-4.5c-.2 0-.3-.1-.5-.2s-.3-.3-.3-.5c-.7-3.6-2.2-6.3-4.5-8-2.3-1.7-5.1-2.6-8.4-2.6-4.7 0-8.3 1.6-10.8 4.9-2.6 3.3-3.8 7.7-3.8 13.3 0 6 1.3 10.6 3.9 13.7 2.6 3.1 6.2 4.7 10.8 4.7 3.7 0 6.7-1 9-3s3.7-4.9 4.2-8.6c0-.2.1-.3.3-.5.2-.1.3-.2.5-.2h4.6c.2 0 .3.1.4.2.1.1.2.3.2.5-1.1 5.6-3.2 9.7-6.6 12.4M5.7 81.9l.1 16.8c0 .2-.1.3-.2.5-.2.1-.3.2-.5.2H.9c-.2 0-.3-.1-.5-.2-.1-.2-.2-.3-.2-.5l.3-21.3-.3-22.1c0-.2.1-.3.2-.5.1-.1.3-.2.5-.2h6.7c.2 0 .4.1.6.2.2.1.3.3.4.4l14.2 36.6 13.8-36.6c0-.2.2-.3.4-.4.2-.1.4-.2.6-.2h6.3c.2 0 .3.1.5.2.1.2.2.3.2.5l-.3 22.1.3 21.3c0 .2-.1.3-.2.5-.1.1-.3.2-.5.2h-4.7c-.2 0-.3-.1-.5-.2-.1-.2-.2-.3-.2-.5l.1-16.8.1-13.7.1-5.8L25 98.8c0 .2-.2.3-.4.4-.2.1-.4.2-.6.2h-3.4c-.2 0-.4-.1-.6-.2-.2-.1-.3-.3-.4-.4L5.4 61.9l.1 6.5.2 13.5zM56.1 81.8l.1 16.8c0 .2-.1.3-.2.5-.2.1-.3.2-.5.2h-4.2c-.2 0-.3-.1-.5-.2-.1-.2-.2-.3-.2-.5l.3-21.3-.3-22.1c0-.2.1-.3.2-.5.1-.1.3-.2.5-.2H58c.2 0 .4.1.6.2.2.1.3.3.4.4l14.2 36.6L87 55c0-.2.2-.3.4-.4.2-.1.4-.2.6-.2h6.3c.2 0 .3.1.5.2.1.2.2.3.2.5l-.3 22.1.3 21.4c0 .2-.1.3-.2.5-.1.1-.3.2-.5.2h-4.7c-.2 0-.3-.1-.5-.2-.1-.2-.2-.3-.2-.5l.1-16.8.1-13.7.1-5.8-13.8 36.3c0 .2-.2.3-.4.4-.2.1-.4.2-.6.2H71c-.2 0-.4-.1-.6-.2-.2-.1-.3-.3-.4-.4L55.8 61.8l.1 6.5.2 13.5zM154.6 80.9l.1 18c0 .2-.1.3-.2.5-.2.1-.3.2-.5.2h-4.4c-.2 0-.3-.1-.5-.2s-.2-.3-.2-.5l.3-22.1-.3-21.4c0-.2.1-.3.2-.5s.3-.2.5-.2h5.6c.2 0 .4.1.6.2.2.1.4.2.5.4l23.4 36.6-.1-3.9-.1-14.1-.1-18.5c0-.2.1-.3.2-.5s.3-.2.5-.2h4.4c.2 0 .3.1.5.2.1.1.2.3.2.5l-.2 21.4.3 22.1c0 .2-.1.3-.2.5-.1.1-.3.2-.5.2h-5.9c-.2 0-.4-.1-.6-.2-.2-.1-.4-.2-.5-.4l-23.1-36.1.1 4.8v13.2z"/><path class="top-o" d="M107 39.4c0 2.8.4 5.4 1.1 7.6.7 2.3 1.7 4.2 3.1 5.8 1.3 1.5 2.9 2.7 4.8 3.6 1.9.8 4 1.3 6.4 1.3 2.4 0 4.5-.4 6.4-1.3 1.9-.8 3.5-2 4.8-3.6 1.3-1.6 2.3-3.5 3-5.8.7-2.3 1-4.8 1-7.7 0-2.8-.3-5.4-1-7.7s-1.7-4.2-3-5.8c-1.3-1.6-2.9-2.8-4.8-3.6-1.9-.9-4.1-1.3-6.5-1.3-2.4 0-4.5.4-6.4 1.2-1.9.8-3.5 2-4.8 3.6-1.3 1.6-2.3 3.5-3 5.8-.8 2.4-1.1 5-1.1 7.9zm36.7-.1c0 3.5-.5 6.7-1.5 9.6-1 2.9-2.5 5.3-4.3 7.3-1.9 2-4.2 3.6-6.8 4.7-2.7 1.1-5.6 1.7-8.8 1.7-3.2 0-6.1-.6-8.8-1.7-2.6-1.1-4.9-2.7-6.8-4.7-1.9-2-3.3-4.4-4.3-7.3-1-2.9-1.5-6-1.5-9.5 0-3.6.5-6.8 1.5-9.7 1-2.9 2.5-5.3 4.3-7.3 1.9-2 4.1-3.6 6.8-4.7 2.6-1.1 5.6-1.6 8.8-1.6 3.3 0 6.2.5 8.8 1.6 2.6 1.1 4.9 2.6 6.8 4.6 1.9 2 3.3 4.4 4.3 7.3.9 2.9 1.4 6.1 1.5 9.7z"/><path class="bottom-o" d="M107 63.5c0 2.8.4 5.4 1.1 7.6.7 2.3 1.7 4.2 3.1 5.8 1.3 1.5 2.9 2.7 4.8 3.6 1.9.8 4 1.3 6.4 1.3 2.4 0 4.5-.4 6.4-1.3 1.9-.8 3.5-2 4.8-3.6 1.3-1.6 2.3-3.5 3-5.8.7-2.3 1-4.8 1-7.7 0-2.8-.3-5.4-1-7.7s-1.7-4.2-3-5.8c-1.3-1.6-2.9-2.8-4.8-3.6-1.9-.9-4.1-1.3-6.5-1.3-2.4 0-4.5.4-6.4 1.2-1.9.8-3.5 2-4.8 3.6-1.3 1.6-2.3 3.5-3 5.8-.8 2.4-1.1 5-1.1 7.9zm36.7-.1c0 3.5-.5 6.7-1.5 9.6-1 2.9-2.5 5.3-4.3 7.3-1.9 2-4.2 3.6-6.8 4.7-2.7 1.1-5.6 1.7-8.8 1.7-3.2 0-6.1-.6-8.8-1.7-2.6-1.1-4.9-2.7-6.8-4.7-1.9-2-3.3-4.4-4.3-7.3-1-2.9-1.5-6-1.5-9.5 0-3.6.5-6.8 1.5-9.7 1-2.9 2.5-5.3 4.3-7.3 1.9-2 4.1-3.6 6.8-4.7 2.6-1.1 5.6-1.6 8.8-1.6 3.3 0 6.2.5 8.8 1.6 2.6 1.1 4.9 2.6 6.8 4.6 1.9 2 3.3 4.4 4.3 7.3.9 2.9 1.4 6.1 1.5 9.7z"/></svg>

        </div>
      </Link>
      <div className="team-incommon">
        <div className="title-incommon-team">INCOMMON TEAM</div>
        <div className="row">
          <div className="col-md-4">
            <div>
            <p>  <strong>Annalisa Sacchi</strong> is a Full Professor and Chair of the Graduate program in Theatre and Performing Arts at the Iuav University of Venice.
She is the PI of the ERC Starting Grant winning project “INCOMMON. In Praise of the Community. Shared Creativity in the Arts and Politics in Italy (1959-1979)”, and a member of the “Pass the MIC! Decolonizing Education through the Arts” project, winner of the Creative Europe program.
She has carried out research in London, at Queen Mary University, the Warburg Institute and UCL, at NYU and at Harvard (Lauro de Bosis fellowship).
Her publications include: “La performance della memoria” (edited with F. Bortoletti, 2018), “Il posto del re. Estetiche del teatro di regia nel modernismo e nel contemporaneo” (2012), “Shakespeare per la Socìetas Raffaello Sanzio” (2014), “Itinera. Trajectoires de la forme Tragedia Endogonidia” (with E. Pitozzi, 2008), and the Italian translation of F. Rokem, “Philosophers and Thespians: Thinking Performance” (2014).
  </p>
  <p>
Her major publications for INCOMMON are:
I. Caleo, P. Di Matteo, A. Sacchi (eds), “In fiamme. La performance nello spazio delle lotte (1967-1979)”, bruno, Venezia 2021; “Quelli che volevano tutto: alle origini del social turn in Italia, Giuliano Scabia e il caso del decentramento torinese”, in F. Fiaschini, R. Gandolfi (eds), “Controcampi. Estetiche e pratiche della performance negli spazi del sociale”, Bulzoni, Roma 2022, pp. 83-106; “Imperdonabili. Relazioni, opere e rivolte all’origine delle arti performative in Italia”, Marsilio, Venezia, forthcoming in 2022.
  </p>
            </div>
            <div className="mt-5">
              <strong>Aleksandra Jovićević</strong> is a Full Professor of performance studies at the Department of History Anthropology Religion Arts Performance at Sapienza University of Rome, and Director of the Master in Video Editing, Digital Storytelling for Live Performance at the same university. Her book, “Orson Welles and Theatre: Shakespeare and Beyond”, has just been published by Bulzoni editor in Rome, where she is also the curator of a book series, Politics and Aesthetics of Performance. Aleksandra Jovićević is a Visiting Professor at the Belgrade University of Arts; president of the Dragan Klaić Fellowship Foundation and a member of the scientific committee of the research project INCOMMON.
            </div>
            <div className="mt-5">
            <p>
              <strong>Stefano Brilli</strong> is a postdoctoral research fellow
              at the Department of Communication Sciences, Humanities and
              International Studies (DISCUI) of the University of Urbino Carlo
              Bo, where he works in research projects on digital cultures and
              performing arts audiences, and teaches Analysis of Internet
              Languages. His research interests are centred on the sociology of
              arts, performing arts audiences and irreverence and visibility in
              digital culture. From 2017 to 2019, he was a postdoctoral research
              fellow at the IUAV University of Venice. For the INCOMMON research
              project, he has studied the relational aspects of the avant-garde
              theatre scene of the 1960s and 1970s; he worked on the conceptual
              design of the database and archive, and on the construction of the
              artists' network.
            </p>
            <p>
            Amongst his main publications for INCOMMON: “Perché c’è una scena anziché il nulla? Componenti relazionali della scena performativa italiana (1959-1979)”, in I. Caleo, P. Di Matteo, A. Sacchi (eds), “In fiamme. La performance nello spazio delle lotte (1967-1979)”, bruno, Venezia 2021, pp. 250-259.
            </p>
            </div>
            <div className="mt-5">
          <p>    <strong>Gabriele Colombo</strong> is a researcher at the
              Department of Architecture and Arts of the Università IUAV di
              Venezia and collaborates with DensityDesign, a research lab at the
              Design Department of Politecnico di Milano. He is affiliated with
              the Visual Methodologies collective of the Amsterdam University of
              Applied Sciences. He is a lecturer in the Final Synthesis Studio
              of the Master Degree in Communication Design at Politecnico di
              Milano, where he teaches 'Digital Methods and Communication
              Design'. His research and teaching activities focus on the design
              of visual tools in support of digital social research, and on the
              design of novel strategies for the communication, exploration,
              analysis and valorisation of collections of images and videos. For
              INCOMMON he coordinated the design and development of the digital
              archive.
          </p>
          <p>
          For INCOMMON he coordinated the ideation, design and development phases of the digital archive.
           He described the process and motivation behind the design of the INCOMMON archive in this publication: “Dare forma all’inarchiviabile. Progettare un archivio del teatro italiano degli anni Sessanta  e Settanta. Shaping the unarchivable. Designing an archive of Italian theater in the Sixties and Seventies”, Progetto Grafico #37, AIAP,
           2021, ISSN 18241301, {' '}
           <a
             className="text-white"
             href="https://re.public.polimi.it/handle/11311/1191475"
           >
             http://hdl.handle.net/11311/1191475
           </a>
          </p>
            </div>
            <div className="mt-5">
            <p>
              <strong>Giada Cipollone</strong>, PhD, is an adjunct professor at the University of Pavia, where she teaches courses on contemporary theatre. She is a member of the research centre “Self Media Lab. Writings, Performance, Technologies of the Self” and is on the organising committee of the summer school “The Safekeeping of Memory”. Her first book, entitled “Actor portraiture and still photography in Italy 1905-43 (1905-1943). Actress images from the Turconi Archive”, was published by Scalpendi in 2020. From 2019 to 2021 she was a post-doctoral research fellow at the Iuav University of Venice as part of the INCOMMON project. For INCOMMON she worked, on the one hand, on the research into photographic materials from archives and private collections that are part of the INCOMMON digital archive and, on the other hand, on the relationship between photography and performativity, experimental theatre and feminism in the 1970s.
            </p>
            <p>
            Her major publications for INCOMMON are: “Nemesi performativa. Scritture,
            corpi e immagini nella ricerca di Lina Mangiacapre e delle Nemesiache”, «Mimesis Journal», 10, 2, 2021, DOI:{' '}
            <a
              className="text-white"
              href="https://journals.openedition.org/mimesis/2289"
            >
              https://doi.org/10.4000/mimesis.2289
            </a>; “Arte, teatro, performatività, femminismo nella fotografia di Agnese De Donato”, «Sciami | ricerche», 10, 2021, DOI:{' '}
            <a
              className="text-white"
              href="https://doi.org/10.47109/0102"
            >
              https://doi.org/10.47109/0102
            </a>
            </p>
            </div>
            <div className="mt-5">
              <strong>Cristiano Contin</strong> A software engineer, he works as
              an independent contractor with Elan42. Since 1999, he has
              developed database based frameworks and automation software,
              designing and deploying mission critical systems all around Italy.
              For INCOMMON he designed the data backend and the data entry
              software.
            </div>
            <div className="mt-5">
              <strong>Monica Nannini</strong>. Founder in Bologna of SPA! visual design (1997), joined in 2015 by Pietro Garrone, Monica coordinates editorial material, designs visual identities and relative applicative systems for companies, cultural and social organisations. From 2004 to 2013, she was the art director of «Art’o», a magazine on the culture and policies of the visual and performing arts. She co-authored “Web Design in Italy 0.1” (Happy Books, Modena 2004). From 2012 to 2018 she was a member of the national board of Aiap (Italian Association Visual Communication Design). In 2015 she designed and curated the exhibition “Millennials. The new scene of Italian graphic design”, held in Milan. She followed the INCOMMON project from the very beginning. Together with Pietro Garrone and Max Ryan, she defined the guidelines for the entire communication system, which aimed to convey the radicalness and innovative approach of the project, and to bring the academic content to an informative level, launching the website to build an audience for the digital archive and all the initiatives and cultural events that arose from this experience. The INCOMMON visual identity project was selected for the 2019 AWDA (Aiap Women in Design Award) contest.
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <strong>Stefano Tomassini</strong> teaches at the Iuav University of Venice (I). He has taught at the universities of Ca’ Foscari (I) and University of Italian Switzerland in Lugano (CH) where he was Dance Curator for the LAC (LuganoInScena). In 2008-2009 he was a Fulbright-Schuman Research Scholar (NYC); in 2010 Scholar-in-Residence at the Archive of the Jacob’s Pillow Dance Festival (Lee, Mass.) and, during the 2011 fall semester, Associate Research Scholar at the Italian Academy for Advanced Studies in America, Columbia University (NYC). From 2013 to 2016 he collaborated with the artistic director of the Dance Department of La Biennale di Venezia (I). In 2016 he was Scholar-in-Residence at Scenario Pubblico - Centro Nazionale di Produzione della Danza in Catania (I), on a project about dance reconstruction. Since 2017 he is a jury member for Dance Swiss Days 2019. He is currently a dance critic for the magazine «Teatro e Critica» and member of the Advisory commission on dance of the Italian Ministry of Culture. He was a senior researcher of the INCOMMON project, for which he curated and studied the collection of photographic and audiovisual materials from the archives of Luca Ronconi, Carlo Quartucci, Giuliano Scabia and Franco Quadri. In 2018 he published the first monograph of the project entitled “New York furioso. Luca Ronconi e «quelli dell’Orlando» a Bryant Park” (1970), by Marsilio, on entirely unpublished material preserved at the New York Public Library for the Performing Arts.
            </div>
            <div className="mt-5">
              <strong>Valentina Valentini</strong> teaches performing arts and new media at Sapienza University of Rome. Her research interests focus on performance in the twentieth century, especially the relationship between theatre, the visual arts and new technologies. Her most recent book in this field is “Worlds Bodies Matters” (2014). Her last book is: “New Theater in Italy”, a research project on Italian theatre in the years between the late 1960s and 2013, which produced a publication by Routledge (2017) and a website. See:{' '}
              <a
                className="text-white"
                href="http://www.nuovoteatromadeinitaly.com"
              >
                http://www.nuovoteatromadeinitaly.com
              </a>
              <br />
              The web project amplifies, investigates and supports the
              analytical progression of the publication, enabling the
              researchers to reach and view different kinds of documents (texts,
              photos, videos and audios) to which the publication refers through
              the link creating a constant dialogue between written page and
              web. She is a member of the scientific committee of the research
              project INCOMMON.
            </div>
            <div className="mt-5">
            <p>
              <strong>Marco Baravalle </strong>is a member of S.a.L.E. Docks, a collective and an independent space for visual arts, activism, and experimental theatre located in what was once an abandoned salt-storage facility in Dorsoduro, Venice, Italy. Founded in 2007, its programming includes activist-group meetings, formal exhibitions, and screenings. Baravalle is a research fellow at “INCOMMON. In Praise of Community. Shared Creativity in Arts and Politics in Italy (1959-1979)”. He is a member of IRI (Institute Of Radical Imagination), a think-tank inviting political scientists, economists, lawyers, architects, hackers, activists, artists and cultural producers to share knowledge on a continuous basis, with the aim of defining and implementing zones of post-capitalism in Europe’s South and the Mediterranean. He is the author of “L’autunno caldo del curatore. Arte, neoliberismo, pandemia” (2021). In 2021 he was awarded with a Fulbright Visiting Student Researcher grant at the CUNY Graduate Center, New York.
            </p>
            <p>
            His major publications for INCOMMON are: “L’autunno caldo del curatore”, Marsilio, Venezia, 2021; “Giuliano Scabia: Catastrofe dell’utopia, utopia oltre la catastrofe”, in I. Caleo, P. Di Matteo, A. Sacchi (eds), “In fiamme. La performance nello spazio delle lotte (1967-1979)”, bruno, Venezia 2021, pp. 276 - 287; “Teatro ad oltranza. Giuliano Scabia e la partecipazione radicale”, in «Acting Archives Review», Anno X, numero 19 – Maggio 2020, ISSN: 2039‐9766; pp. 102-120.
            </p>
            </div>
            <div className="mt-5">
              <strong>Veronica Franchi</strong> received her master's degree in Theatre and Performing Arts from Iuav University of Venice. She collaborates with the communication office of Teatro Metastasio in Prato and she has been working as an assistant director with OHT [Office for a Human theatre]. For INCOMMON she joined the research group in the final phase of the project, working on the archiving and editing of documents within the digital archive.
            </div>
            <div className="mt-5">
              <strong>Pietro Garrone</strong> is an independent graphic designer based in London and partner of SPA! visual design. A graduate of Central Saint Martins and the Royal College of Art, his work is focused on visual identities and innovative narratives for brands and media platforms. While in the Royal College of Art Visual Communication programme, Pietro produced his dissertation titled “Declaration of State of Permanent Happiness” – a first comprehensive publication on the visual culture of Bologna, Italy in 1977. Much of this research informed the development of the visual identity for INCOMMON in 2017, executed together with Monica Nannini and Max Ryan. Pietro’s practice is currently focused on creating radical content with the UK digital media platform Novara Media, and teaching as a visiting lecturer in the Kingston University BA Graphic Design programme.
            </div>
            <div className="mt-5">
              <strong>Matteo Scaffidi</strong> A web developer, he works for
              Inmagik from 2019, he has developed many frontend applications and
              apps. For INCOMMON he developed the frontend website.
            </div>
            <div className="mt-5">
              <strong>Simone Zantedeschi</strong> graduated in economics and
              business at University of Verona and works in the Iuav University
              of Venice Research Office. He deals with the financial and
              administrative management of the project in regards to the rules
              for the eligibility of expenses established both at the national
              and European level. He is entrusted with the financial reporting,
              and maintaining contacts with the European Commission officials
              for matters concerning the project’s financial management.
            </div>
            <div className="mt-5">
              <strong>Olga Barmine</strong> Trained as an architect and working in the field of design as a professional and university professor, she began to work as a translator in 1993 to maintain her proficiency of thought and expression in her native language, English, while living permanently in Italy. As a translator, she concentrates exclusively on publications and academic work in the fields of design, architecture and the arts. For INCOMMON, she translated the results of the research work in academic papers and material for the website, and provided linguistic support throughout the project. 
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <strong>Enrico Pitozzi</strong> teaches at the University of Bologna. He has taught at the universities of Venice (IUAV) and Padua; he has been a visiting professor at the universities of Paris, Montréal, Valencia and Frankfurt. He is deputy-director of the International Voice Project “Malagola”, founded in Ravenna by Ermanna Montanari. He is a member of the Scientific Committee for Entertainment of the Emilia-Romagna Region (LR13/99 art. 6 - Regional Council of 12/07/2021, DGR n. 1118/2021). He is a member of the “MeLa research lab” at the Iuav University of Venice, the project “Mixed Reality” at the Université Côte d’Azur de Nice (FR) and the “Sensory Studies” of Concordia University (CA). He is a member of the scientific committee of international journals in Italy, Canada and Brazil. He was senior researcher for the INCOMMON project, for which he curated and studied the collection of photographic and audiovisual materials from the archives of Leo de Berardinis, Edoardo Fadini and Franco Quadri.
            </div>
            <div className="mt-5">
            <p>  <strong>Maria Grazia Berlangieri</strong> is Assistant Professor in Performing Arts and New Media at   Sapienza University of Rome. She received her PhD in Digital Technologies for Research on the Performing Arts from Sapienza University of Rome. Her current research focuses are the history and aesthetics of Italian theatre, narrative visualisation of collected data in the Performing Arts, the analysis through motion capture technologies of actor-dancer movements, artificial intelligence for Cultural Heritage, transmedia narrative. She participated as a researcher in the European project “Eclap, European Collected Library of Artistic Performance”. Since 2005 she oversees the archive of the Centro Teatro Ateneo, La Sapienza University of Rome. She teaches Teatro e New Media, Archivi e Musei digitali per lo Spettacolo dal vivo at the Sapienza University of Rome. Among others, she has published “Performing Space. Lo spazio performativo e l’hacking digitale. Nuove tecnologie e transmedialità” (2021). For the INCOMMON research project, she studied the avant-garde theatre scene of the 1960s and 1970s; she worked on the research of unpublished documents from archives and private collections that are part of the INCOMMON digital archive; she also worked on the conceptual design of the database and archive, in particular on metadata form.
            </p>
            <p>
            Her major publications for INCOMMON are: “La forma dell’inarchiviabile. Fonti, dati, metadati: I documenti teatrali
            e la rimediazione digitale”, «Arti dello Spettacolo/ Performing Arts», VI, special Issue 2020, {' '}
            <a
              className="text-white"
              href="https://iris.uniroma1.it/handle/11573/1411721"
            >
              http://hdl.handle.net/11573/1411721
            </a>; “Aspettando Godot e la cosmogonia teatrale di Carlo Quartucci”, «Mimesis Journal», 9, 2, 2020, DOI:{' '}
            <a
              className="text-white"
              href="https://journals.openedition.org/mimesis/2120"
            >
              https://doi.org/10.4000/mimesis.2120
            </a>; “Il Festival di S. Beckett: utopia e ricerca lungo il fiume” in I. Caleo, P. Di Matteo, A. Sacchi (eds), “In fiamme. La performance nello spazio delle lotte (1967-1979)”, bruno, Venezia 2021, pp. 294-303.
            </p>

            </div>
            <div className="mt-5">
            <p>
              <strong>Piersandra Di Matteo</strong>. Performing arts theorist, dramaturge, and curator, she is a member of the INCOMMON research group at Iuav University of Venice, where she teaches Curatorship of Performing Arts. Her theoretical interests range from contemporary theatre to dramaturgy, from the politics of the voice to curatorial practices. In recent years she has held lectures and seminars in research centres and universities in Hong Kong, Singapore, Shanghai, Amsterdam, New York, Philadelphia, Montréal, São Paulo, Belo Horizonte, and was a visiting scholar at MESTC/CUNY (New York, 2017). She has been the closest theoretical collaborator of Romeo Castellucci, with whom she works in major theatres and international festivals. She was the artistic curator of the Atlas of Transitions Biennale (2017-2020) for ERT. She is currently the artistic director of Short Theatre in Rome (2022-2024).
            </p>
            <p>
            Her major publications for INCOMMON are: “Sulle tracce di Edoardo II di Carmelo Bene”, in Piersandra Di Matteo,
            in I. Caleo, P. Di Matteo, A. Sacchi (eds), “In fiamme. La performance nello spazio delle lotte (1967-1979)”,
            bruno, Venezia 2021, pp. 102-111; Performance + Curatela, Luca Sossella Editore, Bologna 2021; “Performare il ridere”, «Sciami | ricerche», 7, 2020, DOI: {' '}
            <a
              className="text-white"
              href="https://doi.org/10.47109/0102270105"
            >
              https://doi.org/10.47109/0102270105
            </a>; “Il piede e la sincope”, in F. Gallo, P. Lagonigro, M. Rossi (a cura di), “Gli artisti visivi e i linguaggi della televisione in Italia: collaborazioni, sperimentazioni e incursioni”,
            «Sciami | Ricerche», 8, 2020, DOI: {' '}
            <a
              className="text-white"
              href="https://doi.org/10.47109/0102200113"
            >
              https://doi.org/10.47109/0102200113
            </a>


            </p>
            </div>
            <div className="mt-5">
              <strong>Ilenia Caleo</strong> is a performer, activist and researcher. Since 2000 she has been working as an actress, performer and dramaturge for contemporary theatre, collaborating with various companies and directors, including “nella tempesta”, “Raffiche” and “Tutto brucia” of Motus theatre company. Together with the artist Silvia Calderoni, she created a nomadic atelier of workshops and artistic residences. Starting with a masterclass at the Biennale College Teatro in 2018, they created “KISS”, a performance project with 23 performers produced by the Santarcangelo Festival, CSS Udine and Motus. For the “Queering Platform” of the West Kowloon Cultural District in Hong Kong, they co-curate the “SO IT IS” transnational project.
With a Master Degree in Contemporary Philosophy, her research focuses on bodies, feminist epistemologies, experimentation in the performing arts and new cultural institutions. She is a researcher at Iuav University of Venice and co-founder of the Master in Gender Studies and Politics of Roma Tre University. She collaborates with the INCOMMON research project.
            </div>
            <div className="mt-5">
              <strong>Jacopo Poletto</strong>. Milan based, rencently graduated
              Communication Designer focused in Information and Data
              Visualization Design. Fascinated by complexity and yearning to
              create meaningful experiences and knowledge, Jacopo Poletto joined
              the design team of Incommon during his internship at Density
              Design. He helped designing the visualizations and their
              interactions, together with the overall UX/UI of the very first
              prototype of the digital archive interface.
            </div>
            <div className="mt-5">
              <strong>Max Ryan</strong> is a graphic designer, lecturer,
              researcher and developer based in London, UK and was previously a
              partner of Studio P2P. He is a graduate of the Royal College of
              Art and teaches at Kingston University across their BA and MA
              Graphic Design courses and has given talks and run workshops at
              many universities and cultural institutions. His research centres
              on the relation of design to networks and systems at scale,
              dealing with ideas of complexity, abstraction and the overview.
            </div>
          </div>
        </div>
      </div>


      <div className="border-top">
        <Footer />
      </div>
    </div>
  )
}
