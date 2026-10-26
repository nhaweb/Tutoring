'use client'
import * as React from 'react'
import { ChevronDown } from 'lucide-react'
export function Accordion({ children }: { children: React.ReactNode }) { return <div className="divide-y divide-slate-200">{children}</div> }
export function AccordionItem({ question, children }: { question: string; children: React.ReactNode }) { const [open,setOpen]=React.useState(false); return <div><button className="flex w-full items-center justify-between py-5 text-left font-bold text-slate-800" onClick={()=>setOpen(!open)}>{question}<ChevronDown className={open?'rotate-180 text-orange-500':''}/></button>{open && <div className="pb-5 pr-8 leading-7 text-slate-500">{children}</div>}</div> }
