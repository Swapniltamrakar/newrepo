package dao;

import static utils.HibernateUtils.getFactory;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import pojos.Team;

public class TeamDaoImpl implements TeamDao {

	@Override
	public String addTeam(Team team) {
		String msg="";
		Session session = getFactory().getCurrentSession();
		Transaction tx = session.beginTransaction();
		try {
			session.persist(team);
			tx.commit();
			msg="Team added";
		}catch(RuntimeException r) {
			tx.rollback();
			msg="Team not added";
		}
		return msg;
	}

	@Override
	public List<Team> getTeamAbbr() {
		List<Team> tList = new ArrayList<>();
		String jpql="select new pojos.Team(id,abbrevation) from Team";
		Session session = getFactory().getCurrentSession();
		Transaction tx = session.beginTransaction();
		try {
			tList=session.createQuery(jpql,Team.class).getResultList();
			tx.commit();
			
		}catch(RuntimeException r) {
			tx.rollback();
		}
		return tList;
	}

}
