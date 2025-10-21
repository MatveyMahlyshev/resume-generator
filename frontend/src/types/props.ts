export interface Props<Type> {
  data: Type;
  onUpdate: (data: Type) => void;
  
}

export interface PropsNext<Type> extends Props<Type>{
  onNext: () => void;
}

export interface PropsBack<Type> extends Props<Type>{
  onBack: () => void;  
}

export interface PropsMid<Type> extends PropsNext<Type>, PropsBack<Type>{

} 
