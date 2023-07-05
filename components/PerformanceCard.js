'use client';

import { Button, Card } from 'flowbite-react';
import React, { Component } from "react";

export default function PerformanceCard(props) {
        return (
                    <Card
                        imgAlt={props.title + ". " + props.dates}
                        imgSrc="/dance/index-header.jpg"
                        className='h-full w-full bg-wheat border-2 border-wheat'
                    >
                        <h4 className="text-black whitespace-normal text-center italic font-bold leading-none">
                            {props.title}
                        </h4>
                        <p className='text-center text-xs text-black leading-none'>{props.dates}</p>
                        <Button color="goldenrod" pill className="border-2 border-goldenrod bg-wheat hover:bg-goldenrod transition-all duration-400">
                            {props.button_text}
                        </Button>
                    </Card>
  )
}