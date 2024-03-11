import { createContext } from 'react'

export const TrackerDataContext = createContext([ [], () => { } ])

export const SidebarContext = createContext([ {}, () => { } ])

export const LoadingContext = createContext([ {}, () => { } ])