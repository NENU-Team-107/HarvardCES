import { 
  ChairListParallel2026, 
  ChairListLocalParallel2026, 
  ChairListProgram2026, 
  ChairListPublicity2026, 
  ChairListRegistration2026, 
  ChairListWorkshop2026, 
  ChairListWorkshopCo2026, 
  ChairListPublicityCo2026, 
  ChairListOutreachCo2026, 
  ChairListLogistics2026, 
  ChairListMemberLeft2026, 
  ChairListMemberRight2026 
} from '~/lib/data';
import type { H3Event } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
  const query = getQuery(event);
  
  if (query.kind === 'Chair of Parallel session') {
    return {
      'status': 'Success',
      'data': ChairListParallel2026
    };
  } else if (query.kind === 'Local Chair of Parallel session') {
    return {
      'status': 'Success',
      'data': ChairListLocalParallel2026
    };
  } else if (query.kind === 'Program Chair') {
    return {
      'status': 'Success',
      'data': ChairListProgram2026
    };
  } else if (query.kind === 'Workshop Chair') {
    return {
      'status': 'Success',
      'data': ChairListWorkshop2026
    };
  } else if (query.kind === 'Publicity Chair') {
    return {
      'status': 'Success',
      'data': ChairListPublicity2026
    };
  } else if (query.kind === 'Registration Chair') {
    return {
      'status': 'Success',
      'data': ChairListRegistration2026
    };
  } else if (query.kind === 'Workshop Co-Chair') {
    return {
      'status': 'Success',
      'data': ChairListWorkshopCo2026
    };
  } else if (query.kind === 'Publicity Co-chair') {
    return {
      'status': 'Success',
      'data': ChairListPublicityCo2026
    };
  } else if (query.kind === 'Outreach Co-Chair') {
    return {
      'status': 'Success',
      'data': ChairListOutreachCo2026
    };
  } else if (query.kind === 'Logistics Support') {
    return {
      'status': 'Success',
      'data': ChairListLogistics2026
    };
  } else if (query.kind === 'MemberLeft') {
    return {
      'status': 'Success',
      'data': ChairListMemberLeft2026
    };
  } else if (query.kind === 'MemberRight') {
    return {
      'status': 'Success',
      'data': ChairListMemberRight2026
    };
  }
  
  return {
    'status': 'Error',
    'data': null
  };
});