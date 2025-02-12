import { ChairListParallel, ChairListProgram, ChairListPublicity, ChairListRegistration, ChairListWorkshop, ChairListLocalParallel, ChairListWorkshopCo, ChairListPublicityCo, ChairListOutreachCo, ChairListLogistics, ChairListMemberLeft, ChairListMemberRight } from "~/lib/data";

export default defineEventHandler(async (event: any) => {
  const query = getQuery(event);
  if (query.kind === 'Chair of Parallel session') {
    const data = {
      'status': 'Success',
      'data': ChairListParallel,
      toJSON() {
        return {
          'status': this.status,
          'data': [
            ...this.data
          ]
        }
      }
    }
    return data;
  } else if (query.kind === 'Local Chair of Parallel session') {
    const data = {
      'status': 'Success',
      'data': ChairListLocalParallel,
      toJSON() {
        return {
          'status': this.status,
          'data': [
            ...this.data
          ]
        }
      }
    }
    return data;
  } else if (query.kind === 'Program Chair') {
    const data = {
      'status': 'Success',
      'data': ChairListProgram,
      toJSON() {
        return {
          'status': this.status,
          'data': [
            ...this.data
          ]
        }
      }
    }
    return data;
  } else if (query.kind === 'Workshop Chair') {
    const data = {
      'status': 'Success',
      'data': ChairListWorkshop,
      toJSON() {
        return {
          'status': this.status,
          'data': [
            ...this.data
          ]
        }
      }
    }
    return data;
  } else if (query.kind === 'Registration Chair') {
    const data = {
      'status': 'Success',
      'data': ChairListRegistration,
      toJSON() {
        return {
          'status': this.status,
          'data': [
            ...this.data
          ]
        }
      }
    }
    return data;
  } else if (query.kind === 'Publicity Chair') {
    const data = {
      'status': 'Success',
      'data': ChairListPublicity,
      toJSON() {
        return {
          'status': this.status,
          'data': [
            ...this.data
          ]
        }
      }
    }
    return data;
  } else if (query.kind === 'Workshop Co-Chair') {
    const data = {
      'status': 'Success',
      'data': ChairListWorkshopCo,
      toJSON() {
        return {
          'status': this.status,
          'data': [
            ...this.data
          ]
        }
      }
    }
    return data;
  } else if (query.kind === 'Publicity Co-chair') {
    const data = {
      'status': 'Success',
      'data': ChairListPublicityCo,
      toJSON() {
        return {
          'status': this.status,
          'data': [
            ...this.data
          ]
        }
      }
    }
    return data;
  } else if (query.kind === 'Outreach Co-Chair') {
    const data = {
      'status': 'Success',
      'data': ChairListOutreachCo,
      toJSON() {
        return {
          'status': this.status,
          'data': [
            ...this.data
          ]
        }
      }
    }
    return data;
  }
  else if (query.kind === 'Logistics Support') {
    const data = {
      'status': 'Success',
      'data': ChairListLogistics,
      toJSON() {
        return {
          'status': this.status,
          'data': [
            ...this.data
          ]
        }
      }
    }
    return data;
  } else if (query.kind === 'MemberLeft') {
    const data = {
      'status': 'Success',
      'data': ChairListMemberLeft,
      toJSON() {
        return {
          'status': this.status,
          'data': [
            ...this.data
          ]
        }
      }
    }
    return data;
  } else if (query.kind === 'MemberRight') {
    const data = {
      'status': 'Success',
      'data': ChairListMemberRight,
      toJSON() {
        return {
          'status': this.status,
          'data': [
            ...this.data
          ]
        }
      }
    }
    return data;
  } else {
    const data = {
      'status': 'Error',
      'data': null,
      toJSON() {
        return {
          'status': this.status,
          'data': this.data
        }
      }
    }
    return data;
  }

})