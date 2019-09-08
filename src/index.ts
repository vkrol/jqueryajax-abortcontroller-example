import $ from "jquery";
import createJqueryAjaxAbortAdapter from "./create-jquery-ajax-abort-adapter";

function fetch({ signal }: { signal: AbortSignal }) {
  return $.ajax({
    beforeSend: createJqueryAjaxAbortAdapter(signal),
    method: "GET",
    url: "https://www.mocky.io/v2/5d754e8a31000065399505f6?mocky-delay=2000ms"
  });
}

const ctrl = new AbortController();
fetch({ signal: ctrl.signal }).then(
  (...args) => {
    console.log(args);
  },
  (...args) => {
    console.log(args);
  }
);
setTimeout(() => {
  ctrl.abort();
}, 1000);
