# Next.js 15 useEffect Hook Issue

This repository demonstrates a bug encountered in a Next.js 15 application using client-side rendering.  The `useEffect` hook within the `About` page component unexpectedly runs repeatedly, leading to an infinite loop and page crashes.  The issue stems from improper use of the dependency array within `useEffect`.

## Bug Description

The `About` page utilizes `useState` and `useEffect` to manage a counter.  The intention is for the counter to increment only once on mount. However, due to the inclusion of `count` in the dependency array of useEffect, the component re-renders continuously. 

## Solution

The solution involves correcting the dependency array in `useEffect`. By removing `count` from the dependency array,  the effect will run only once after the initial render, resolving the infinite loop.