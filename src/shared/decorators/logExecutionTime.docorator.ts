export function LogExecutionTime(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    const start = Date.now();
    const result = await originalMethod.apply(this, args);
    const end = Date.now();
    console.log(`Execution time for ${propertyKey}: ${end - start}ms`);
    return result;
  };
}
