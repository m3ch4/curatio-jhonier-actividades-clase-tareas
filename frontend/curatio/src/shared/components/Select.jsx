export default function Select({
    label,
    name,
    options = []
}) {
    return (
        <div className="w-[320px]">
            {/*Si el label tiene contenido es igual a truthy si no es falsy  */}
            { label && (
            <label className="
                text-mostsmall
                mb-1
                text-label
                font-weight
                font-body
                font-heading
            ">
                {label}
            </label>
            )}

            <select
            name={name}
            className="
                w-full
                h-12
                rounded-md
                border
                border-border
                px-4
            ">

                <option value="Seleccione un tipo de documento"></option>

                {options.map((option) =>  {
                    <options key = {option.id} value={option.id}>
                    {option.label}
                </options>
            })
            };
            </select>

            
        </div>


    );
};

