/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { check } from 'k6';

// eslint-disable-next-line func-names
export default function () {
  const rnd = Math.floor(Math.random() * 9000000);
  const response = http.get(`http://localhost:3001/hostInfo/${rnd}`);
  check(response, {
    'is status 200': (r) => r.status === 200,
  });
}

export const options = {
  executor: 'constant-arrival-rate',
  preAllocatedVUs: 100,
  maxVUs: 1000,
  rate: 1000,
  timeunit: '1s',
  duration: '1m',
  // thresholds: {
  //     'failed requests': ['rate<0.02'],
  //     http_req_duration: ['p(95)<500'],
  //     http_reqs: ['count>6000']
  // },
};
