export default function createJqueryAjaxAbortAdapter(signal: AbortSignal) {
  return function(jqXhr: JQuery.jqXHR) {
    signal.addEventListener("abort", () => {
      jqXhr.abort();
    });
  };
}
