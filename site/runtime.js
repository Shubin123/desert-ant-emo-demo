export async function load(onProgress) {
  const { Emo } = await import('@desert-ant-labs/emo');
  const litert = await import('@litertjs/core');
  return Emo.load({ litert, litertWasmDir: 'https://unpkg.com/@litertjs/core@2.5.2/wasm/', onProgress });
}

