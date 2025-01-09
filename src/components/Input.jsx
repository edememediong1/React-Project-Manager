const classes = "w-full p-1 border-b-2 rounded-sm border-stone-500 bg-stone-200 text-stone-600 resize-none focus:outline-none focus:border-stone-600"

function Input({label, textarea, ...props}) {
  return (
    <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
        {textarea ? <textarea className={classes} {...props} />: <input className={classes} {...props} /> }
    </p>
  )
}

export default Input