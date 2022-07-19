import React, { useEffect, useState } from 'react';

interface Props {
  name: string | null;
}

const HellowWorld: React.FC<Props> = ({ name }) => {
  const [state, setState] = useState<{ fullName: string | null }>({ fullName: '' });

  useEffect(() => {
    setState({ fullName: name });
  }, [name]);
  
  return (
    <div>
      <h5>Hello {state.fullName}</h5>
    </div>
  );
};

interface FormProps<T> {
  values: T;
  children: (values: T) => JSX.Element;
}

const Form = <T extends {}>({ children, values }: FormProps<T>) => {
  return children(values);
};

function Generics() {
  return (
    <div className="Generics">
      <h2>Learn Generics</h2>
      <Form<{ firstName: string | null }> values={{ firstName: 'Cihat' }}>
        {(values) => (
          <HellowWorld name={values.firstName} />
        )}
      </Form>
    </div>
  );
}

export default Generics;
