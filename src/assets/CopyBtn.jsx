export function CopyBtn(props) {
  return (
    <div className="flex items-center justify-center ">
      <button
        onClick={() => { navigator.clipboard.writeText(props.copyMeme), alert("Copied " + props.copyMeme) }}
        className="content-center group relative h-7 overflow-hidden rounded-md bg-neutral-950 px-10 py-0 text-neutral-50 border-dashed border-2 border-green-500 mb-6" >
        <span className="relative z-10" >Copy</span>
        <span className="absolute inset-0 overflow-hidden rounded-md">
          <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-green-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150" />
        </span>
      </button>
    </div>
  );
}
