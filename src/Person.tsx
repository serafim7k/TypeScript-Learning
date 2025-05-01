
interface PersonProps {
    name: string;
    age: number;
    isMarried: boolean;
}

export const Person = (props: PersonProps) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
        <p>Married: {props.isMarried ? 'Yes' : 'No'}</p>
    </div>
  );
}