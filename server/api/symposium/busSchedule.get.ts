import { BusScheduleItemResp } from '@/lib/model';
import { BusSchedule } from '~/lib/data';


export default defineEventHandler(async (event: any) => {
  const query = getQuery(event);
  const id = query.id as string;

  if (BusSchedule.get(id) == null) {
    const data = {
      'status': 'Error',
      'data': null,
    }
    return data;
  }
  if (id == "Day1Route") {
    const data = {
      'status': 'Success',
      'data': BusSchedule.get(id),
      toJSON() {
        return {
          'status': this.status,
          'data': [
            ...(this.data || [])
          ]
        }
      }
    };
    return data;
  }
})