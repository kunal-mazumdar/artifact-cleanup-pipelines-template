const fs = require("fs");
const ts = (new Date).getTime();
const ti = parseInt(process.argv[3]);
const tu = process.argv[4];
const tuMins = {year: 12 * 30 * 24 * 60, month: 30 * 24 * 60, day: 24 * 60, hour: 60, minute: 1};
const tt = `${ts - ti * tuMins[tu] * 60 * 1e3}`;
const aql = fs.readFileSync("plugin_search_template.aql", {encoding: "utf8"});
const maxRepos = parseInt(process.argv[5] || 0);
const repos = process.argv[2];
const rq = repos.split(",").splice(0, maxRepos).map(repo => {
  return {repo: repo}
});
const st = process.argv[6];
const aqlO = JSON.parse(aql);
aqlO.files[0].aql["items.find"]["$or"] = rq;
if (st === "created") {
  delete aqlO.files[0].aql["items.find"]["stat.downloaded"];
  aqlO.files[0].aql["items.find"]["created"] = {$lt: "${threshold_timestamp}"}
}
fs.writeFileSync("plugin_search.aql", JSON.stringify(aqlO, null, 1).replace("${threshold_timestamp}", tt));