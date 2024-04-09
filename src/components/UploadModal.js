'use client'
import React from 'react'
import { modalState } from '@/app/atom/modalAtom'
import { useRecoilState } from 'recoil'
export default function () {
    const [open, setOpen] = useRecoilState(modalState)

    return (
        <div>
            <h1>Upload Modal</h1>
            {open && <h1>The Modal Is Open</h1>}
        </div>
    )
}
