'use client'
import * as React from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
export function Dialog({ open, onOpenChange, children }: { open: boolean; onOpenChange: (open:boolean)=>void; children: React.ReactNode }) { return open ? <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4" onMouseDown={()=>onOpenChange(false)}><div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl" onMouseDown={e=>e.stopPropagation()}>{children}</div></div> : null }
export function DialogTitle({ children }: { children: React.ReactNode }) { return <h2 className="text-2xl font-extrabold text-slate-900">{children}</h2> }
export function DialogClose({ onClick }: { onClick: ()=>void }) { return <button aria-label="Đóng" onClick={onClick} className="absolute right-5 top-5 rounded-full p-2 text-slate-400 hover:bg-slate-100"><X /></button> }
