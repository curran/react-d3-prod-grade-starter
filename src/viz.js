import { select } from 'd3';

export const viz = (container, { state, setState }) => {
  const svg = select(container);

  svg.attr('width', 300).attr('height', 300);

  svg
    .selectAll('circle')
    .data([null])
    .join('circle')
    .attr('cx', 150)
    .attr('cy', 150)
    .attr('r', 50);
};
