import React from "react";
import { Icon } from "@iconify/react";

export function Button(props) {
  const className = ` ${props.border} border-slate-400  mt-5  xm:w-80 w-72 h-12 rounded-md flex items-center px-4 gap-10 font-semibold  pl-3 text-slate-600 font-semibold ${props.bg} items-center ${props.position} ${props.color} `;
  return (
    <button className={className} type={props.type}>
      {props.imgSrc && <img src={props.imgSrc} alt={props.imgAlt} />}
      {props.icon && <Icon width="32px" icon={props.icon} />}
      {props.desc && <span>{props.desc}</span>}
    </button>
  );
}

export function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      className="border-2 border-slate-400 mt-5 xm:w-80 w-72 h-12 rounded-md flex pl-5 outline-none focus:outline-slate-500 focus:border-0 text-md text-slate-900 placeholder-slate-600"
    />
  );
}

export function InputPassword(props) {
  const className =  `border-2 border-slate-400 xm:w-80 w-72 h-12 rounded-md  flex items-center justify-center outline-none focus-within:outline-slate-500 focus-within:border-0 text-md text-slate-900 placeholder-slate-600 pr-5 ${props.mt}`
  return (
    <div className={props.margin}>
      <label class="pl-2" for={props.label}>{props.desc}</label>
      <div className={className}>
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          id={props.id}
          className="w-full h-full rounded-md flex outline-none text-md text-slate-900 placeholder-slate-600 password pl-5 "
        />
        {props.show && (<img width={"26px"} src={props.show} alt={props.imgShow} />)}
        {props.hide && <img src={props.hide} alt={props.imgHide} />}
      </div>
    </div>
  );
}

export function OrWith() {
  return (
    <div class="flex items-center gap-5 w-10/12 whitespace-nowrap mt-7">
      <hr class="w-36 border-[0.1px] border-slate-400" />
      Or with
      <hr class="w-36 border-[0.1px] border-slate-400" />
    </div>
  );
}

export function Account(props) {
  return (
    <div class="flex gap-2 mt-8">
      <span class="font-semibold text-slate-600 ">{props.account}</span>{" "}
      <a class="text-blue-700 font-semibold hover:underline" href={props.link}>
        {props.action}
      </a>
    </div>
  );
}

export function Link(props) {
  return (
    <a class="text-slate-600 hover:text-slate-800" href={props.href}>
      {props.desc}
    </a>
  );
}
